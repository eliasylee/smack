class Api::ChannelsController < ApplicationController
  def index
    @channels = current_user.channels

    render 'api/channels/index'
  end



  def create
    @channel = Channel.new(channel_params)
    @channel.admin_id = current_user.id

    if @channel.save
      render 'api/channels/show'
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end

  def update
    @channel = Channel.find_by_id(params[:id])

    if @channel.update
      render 'api/channels/show'
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end

  def destroy
    @channel = Channel.find_by_id(params[:id])
    @channel.destroy!
    render 'api/channels/show'
  end

  private

  def channel_params
    params.require(:channel).permit(:title, :description, :icon_url)
  end
end
