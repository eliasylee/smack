class Api::TextChannelsController < ApplicationController
  def show
    check = current_user.text_channels { |channel| channel.id == params[:id] }

    unless check.empty?
      @text_channel = TextChannel.find_by_id(params[:id])
    end
  end

  def create
    @text_channel = TextChannel.new(text_channel_params)

    if @text_channel.save
      Message.create!(author_id: 1,
                      body: "This is the beginning of the ##{@text_channel.title} channel.",
                      chatable_id: @text_channel.id,
                      chatable_type: "TextChannel")

      render :show
    end
  end

  def update
    @text_channel = TextChannel.find_by_id(params["text_channel"]["id"].to_i)

    if @text_channel.update(text_channel_params)
      render :show
    end
  end

  def destroy
    @text_channel = TextChannel.find_by_id(params[:id])

    if @text_channel.destroy
      render json: {}
    end
  end

  private

  def text_channel_params
    params.require(:text_channel).permit(:channel_id, :title, :description)
  end
end
