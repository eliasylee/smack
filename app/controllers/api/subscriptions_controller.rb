class Api::SubscriptionsController < ApplicationController
  def show
    @channel = Channel.find_by_id(params[:id])
    @subscribers = @channel.subscribers
  end

  def create
    user = user.find_by_username(subscription_params[:username])
    @subscription = Subscription.new({ user_id: user.id, channel_id: subscription_params[:channel_id]})

    if @subscription.save
      render json: @subscription
    else
      render json: @subscription.errors.full_messages, status: 422
    end
  end

  def destroy
    @subscription = Subscription.find_by_id(params[:id])

    if @subscription.destroy
      render json: {}
    else
      render json: @subscription.errors.full_messages, status: 422
    end
  end

  private

  def subscription_params
    params.require(:subscription).permit(:username, :channel_id)
  end
end
