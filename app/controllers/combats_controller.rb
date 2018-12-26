class CombatsController < ApplicationController
  def create
    user = current_user
    if user.combats.first.nil?
      combat = user.combats.build
      combat.save
    end
    redirect_to user.combats.first
  end
  def new
    if !logged_in?
      flash[:danger] = "You must be logged in to do that."
      redirect_to root_url
    end
  end
  def show
    @combat = Combat.find(params[:id])
  end
end
