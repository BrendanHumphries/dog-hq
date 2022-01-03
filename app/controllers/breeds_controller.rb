class BreedsController < ApplicationController
    def index
        render json: Breed.all, status: :ok
    end

    def show
        render json: Breed.find(params[:id]), status: :ok
    end
end
