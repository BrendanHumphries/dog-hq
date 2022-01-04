class UsersController < ApplicationController
    def index
        render json: User.all, status: :ok
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        user = User.find_by(id: session[:user_id])
        if user
            render json: user, status: :ok
        else
            render json: {error: 'Not authorized'}, status: :unauthorized
        end
    end

    def update
        render json: User.find(params[:id]).update!(user_params), status: :ok
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation, :first_name, :last_name, :email, :profile_photo)
    end
end
