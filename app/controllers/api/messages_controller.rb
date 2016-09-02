class Api::MessagesController < ApplicationController
  def create
    @message = Message.new(message_params)
    @message.author_id = current_user.id

    if @message.save

    else
      render json: {}
    end
  end

  def update
    @message = Message.find_by_id(params[:id])

    if @message.update
      render :show
    else
      render json: @message.errors.full_messages, status: 422
    end
  end

  def destroy
    @message = Message.find_by_id(params[:id])

    if @message.destroy
      render json: {}
    else
      render json: @message.errors.full_messages, status: 422
    end
  end

  private

  def message_params
    params.require(:message).permit(:body)
  end
end
