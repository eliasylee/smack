class Api::ChannelsController < ApplicationController
  def index
    @channels = current_user.channels
  end

  def show
    @channel = Channel.find_by_id(params[:id])
  end

  def create
    @channel = Channel.new(channel_params)
    @channel.admin_id = current_user.id

    if @channel.save
      general_text_channel = TextChannel.new(channel_id: @channel.id, title: "general")
      general_text_channel.save!
      Message.create!(author_id: 1,
                      body: "This is the beginning of the #general channel.",
                      chatable_id: general_text_channel.id,
                      chatable_type: "TextChannel")
      Subscription.create!(user_id: current_user.id, channel_id: @channel.id)

      render :show
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end

  def update
    @channel = Channel.find_by_id(params[:id])

    if @channel.update(channel_params)
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
