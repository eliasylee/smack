class Api::SessionsController < ApplicationController
  def create
    if (params[:user][:username] == "create_guest_account") && params[:user][:password] == "create_guest_password"
      @user = User.create_guest_account!
      login_user!(@user)
      render 'api/users/show'
    else
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
