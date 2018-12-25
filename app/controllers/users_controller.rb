class UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      flash[:success] = "Account created successfully!"
      redirect_to root_url
    else
      render 'register'
    end
  end
  def register
    @user = User.new
  end

  private
  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end
end
