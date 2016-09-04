class Api::TextChannelsController < ApplicationController
  def show
    @text_channel = TextChannel.find_by_id(params[:id])
  end

  def create
    @text_channel = TextChannel.new(text_channel_params)
    welcome_message = Message.new(author_id: 1, body: "This is the beginning of the ##{@text_channel.title} channel.", chatable_id: @text_channel.id, chatable_type: "TextChannel")
    welcome_message.save!

    if @text_channel.save
      render :show
    else
      render json: @text_channel.errors.full_messages, status: 422
    end
  end

  def update
    @text_channel = TextChannel.find_by_id(params[:id])

    if @text_channel.update(text_channel_params)
      render :show
    else
      render json: @text_channel.errors.full_messages, status: 422
    end
  end

  def destroy
    @text_channel = TextChannel.find_by_id(params[:id])

    if @text_channel.destroy
      render json: {}
    else
      render json: @text_channel.errors.full_messages, status: 422
    end
  end

  private

  def text_channel_params
    params.require(:text_channel).permit(:channel_id, :title, :description)
  end
end
