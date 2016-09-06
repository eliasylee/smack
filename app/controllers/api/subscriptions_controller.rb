class Api::SubscriptionsController < ApplicationController
  def index
    @channel = Channel.find_by_id(subscription_params[:channel_id])
    @subscribers = @channel.subscribers  
  end

  def create
    @subscription = Subscription.new(subscription_params)

    if @subscription.save
      render :show
    else
      render json: @subscription.errors.full_messages, status: 422
    end
  end

  def destroy
    @subscriptions = Subscription.find_by_id(params[:id])

    if @subscription.destroy
      render json: {}
    else
      render json: @subscription.errors.full_messages, status: 422
    end
  end

  private

  def subscription_params
    params.require(:subscription).permit(:user_id, :channel_id)
  end
end
