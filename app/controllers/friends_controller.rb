class FriendsController < ApplicationController
    def index
        render json: Friend.all, status: :ok
    end

    def show
        render json: Friend.find(params[:id]), status: :ok
    end

    def create
        render json: Friend.create!(friend_parms), status: :created
    end

    def destroy
        render json: Friend.find(params[:id]).destroy
        head :no_content
    end

    private

    def friend_parms
        params.permit(:dog_id, :friend_id)
    end
end
