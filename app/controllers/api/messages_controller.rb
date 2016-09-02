class Api::MessagesController < ApplicationController
  skip_before_action :require_author, only: [:create]

  def create
    @message = Message.new(message_params)
    @message.author_id = current_user.id

    if @message.save
      Pusher.trigger(@message.chatable_type, 'message_changed', {})
    else
      render json: {}
    end
  end

  def update
    @message = Message.find_by_id(params[:id])

    if @message.update
      Pusher.trigger(@message.chatable_type, 'message_changed', {})
    else
      render json: {}
    end
  end

  def destroy
    @message = Message.find_by_id(params[:id])

    if @message.destroy
      Pusher.trigger(@message.chatable_type, 'message_changed', {})
    else
      render json: {}
    end
  end

  private

  def message_params
    params.require(:message).permit(:body, :chatable_id, :chatable_type)
  end
end
