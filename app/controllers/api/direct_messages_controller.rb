class Api::DirectMessagesController < ApplicationController
  def index
    @current_user = current_user
    @direct_messages = @current_user.direct_messages
  end

  def show
    check = current_user.direct_messages { |direct_message| direct_message.id == params[:id] }

    unless check.empty?
      @current_user = current_user
      @direct_message = DirectMessage.find_by_id(params[:id])
    end
  end

  def create
    @user = User.find_by_username(direct_message_params[:username])

    if @user
      @direct_message = DirectMessage.new({ speaker_id: current_user.id, listener_id: @user.id })

      if @direct_message.save
        Pusher.trigger('me_channel_' + @user.id.to_s, 'direct_message_action', {})
        Message.create!(author_id: 1,
                        body: "This is the beginning of the direct message history between #{current_user.username} and #{@user.username}.",
                        chatable_id: @direct_message.id,
                        chatable_type: "DirectMessage")
        render :create
      end
    else
      render(json: ["User not found!"], status: 404)
    end
  end

  def destroy
    @direct_message = DirectMessage.find_by_id(params[:id])

    if @direct_message.destroy
      pusher_id = @direct_message["speaker_id"] == current_user.id ? @direct_message["listener_id"] : @direct_message["speaker_id"]

      Pusher.trigger('me_channel_' + pusher_id.to_s, 'direct_message_action', {})
      render json: {}
    end
  end

  private

  def direct_message_params
    params.require(:direct_message).permit(:username)
  end
end
