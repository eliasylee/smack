class Api::SubscriptionsController < ApplicationController
  def create
    @subscription = Subscription.new(subscription_params)

    if @subscription.save
      render :show
    else
      render json: @subscription.errors.full_messages, status: 422
    end
  end

  def destroy
    @subscription = Subscription.find_by(user_id: params[:user_id])

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
