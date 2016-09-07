class Api::DirectMessagesController < ApplicationController
  def index
    @current_user = current_user
    @direct_messages = @current_user.direct_messages
  end

  def show
    @direct_message = DirectMessage.find_by_id(params[:id])
  end

  def create
    @user = User.find_by_username(direct_message_params[:username])
    @direct_message = DirectMessage.new({ speaker_id: current_user.id, listener_id: user.id })

    if @direct_message.save
      render :create
    else
      render json: @direct_message.errors.full_messages, status: 422
    end
  end

  private

  def direct_message_params
    params.require(:direct_message).permit(:username)
  end
end
