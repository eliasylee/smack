class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login_user!(@user)
      render 'api/users/show'
    else
      render(json: ["Username or password are incorrect"], status: 401)
    end
  end

  def destroy
    @user = current_user

    if @user
      logout_user!
      render json: {}
    else
      render(json: ["Nobody signed in"], status: 404)
    end
  end
end
