class Api::ChannelsController < ApplicationController
  def index
    @channels = current_user.channels
  end

  def show
    @channel = Channel.find_by_id(params[:id]).includes(:text_channels)
  end

  def create
    @channel = Channel.new(channel_params)
    @channel.admin_id = current_user.id

    if @channel.save
      render :show
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end

  def update
    @channel = Channel.find_by_id(params[:id])

    if @channel.update
      render :show
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end

  def destroy
    @channel = Channel.find_by_id(params[:id])

    if @channel.destroy
      render json: {}
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end

  private

  def channel_params
    params.require(:channel).permit(:title, :description, :icon_url)
  end
end
