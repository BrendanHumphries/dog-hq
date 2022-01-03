class FavoriteBreedsController < ApplicationController
    def index
        render json: FavoriteBreed.all, status: :ok
    end

    def show
        render json: FavoriteBreed.find(params[:id]), status: :ok
    end

    def create
        render json: FavoriteBreed.create!(favorite_breed_params), status: :created
    end

    def destroy
        FavoriteBreed.find(params[:id]).destroy
        head :no_content
    end

    private

    def favorite_breed_params
        params.permit(:user_id, :breed_id)
    end
end
