class Api::MessagesController < ApplicationController
  def show
    @message = Message.find_by_id(params[:id])
  end

  def create
    @message = Message.new(message_params)
    @message.author_id = current_user.id

    if @message.chatable_type == "TextChannel"
      text_channel = TextChannel.find_by_id(@message.chatable_id)
    else
      direct_message = DirectMessage.find_by_id(@message.chatable_id)
    end

    if @message.save
      if text_channel
        Pusher.trigger('text_channel_' + text_channel.id.to_s, 'message_action', {})
      else
        Pusher.trigger('direct_message_' + direct_message.id.to_s, 'message_action', {})
      end

      render :show
    else
      render json: @message.errors.full_messages, status: 422
    end
  end

  def update
    @message = Message.find_by_id(params[:message][:id].to_i)

    if @message.chatable_type == "TextChannel"
      text_channel = TextChannel.find_by_id(@message.chatable_id)
    else
      direct_message = DirectMessage.find_by_id(@message.chatable_id)
    end

    if @message.update(message_params)
      if text_channel
        Pusher.trigger('text_channel_' + text_channel.id.to_s, 'message_action', {})
      else
        Pusher.trigger('direct_message_' + direct_message.id.to_s, 'message_action', {})
      end

      render :show
    else
      render json: @message.errors.full_messages, status: 422
    end
  end

  def destroy
    @message = Message.find_by_id(params[:id].to_i)

    if @message.chatable_type == "TextChannel"
      text_channel = TextChannel.find_by_id(@message.chatable_id)
    else
      direct_message = DirectMessage.find_by_id(@message.chatable_id)
    end

    if @message.destroy
      if text_channel
        Pusher.trigger('text_channel_' + text_channel.id.to_s, 'message_action', {})
      else
        Pusher.trigger('direct_message_' + direct_message.id.to_s, 'message_action', {})
      end

      render json: {}
    else
      render json: @message.errors.full_messages, status: 422
    end
  end

  private

  def message_params
    params.require(:message).permit(:body, :chatable_id, :chatable_type)
  end
end
