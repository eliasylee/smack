class Api::MessagesController < ApplicationController
  before_action :require_author, only: [:update, :destroy]

  def create
    @message = Message.new(message_params)
    @message.author_id = current_user.id

    if @message.save
      render :show
    else
      render json: @message.errors.full_messages, status: 422
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
      render :show
    else
      render json: @message.errors.full_messages, status: 422
    end
  end

  private

  def message_params
    params.require(:message).permit(:body, :chatable_id, :chatable_type)
  end
end
