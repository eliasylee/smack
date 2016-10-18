class Api::SubscriptionsController < ApplicationController
  def show
    check = current_user.channels { |channel| channel.id == params[:id] }

    unless check.empty?
      @channel = Channel.find_by_id(params[:id])
      @subscriptions = @channel.subscriptions
    end
  end

  def create
    user = User.find_by_username(subscription_params[:username])

    if user
      @subscription = Subscription.new({ user_id: user.id, channel_id: subscription_params[:channel_id]})

      if @subscription.save
        Pusher.trigger('user_' + user.id.to_s, 'subscription_action', {})
        render :create
      end
    else
      render(json: ["User not found!"], status: 404)
    end
  end

  def destroy
    @subscription = Subscription.find_by_id(params[:id])

    if @subscription.destroy
      Pusher.trigger('user_' + @subscription.user_id.to_s, 'subscription_action', {})
      render json: {}
    end
  end

  private

  def subscription_params
    params.require(:subscription).permit(:username, :channel_id)
  end
end
