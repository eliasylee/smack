class Api::MessagesController < ApplicationController
  before_action :require_author, only: [:update, :destroy]

  def show
    @message = Message.find_by_id(params[:id])
  end

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

    if @message.update(message_params)
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
