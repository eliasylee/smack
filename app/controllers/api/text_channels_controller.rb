class Api::TextChannelsController < ApplicationController
  def index
    @text_channels = TextChannel.all

    render 'api/text_channels/index'
  end

  def create
    @text_channel = TextChannel.new(text_channel_params)

    if @text_channel.save
      render 'api/text_channels/show'
    else
      render json: @text_channel.errors.full_messages, status: 422
    end
  end

  def update
    @text_channel = TextChannel.find_by_id(params[:id])

    if @text_channel.update
      render 'api/text_channels/show'
    else
      render json: @text_channel.errors.full_messages, status: 422
    end
  end

  def destroy
    @text_channel = TextChannel.find_by_id(params[:id])
    @text_channel.destroy!
    render 'api/text_channels/show'
  end

  private

  def text_channel_params
    params.require(:text_channel).permit(:channel_id, :title, :description)
  end
end
