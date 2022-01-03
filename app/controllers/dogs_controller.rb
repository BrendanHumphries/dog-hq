class DogsController < ApplicationController
    # def index
    #     render json: {photo: rails_blob_path(Dog.first.profile_photo)}
    # end

    def index
        render json: Dog.all, status: :ok
    end

    def show
        render json: Dog.find(params[:id]), status: :ok
    end

    def create
        render json: Dog.create!(dog_params), status: :created
    end

    def update
        render json: Dog.find(params[:id]).update!(dog_params), status: :ok
    end

    def destroy
        Dog.find(params[:id]).destroy
        head :no_content
    end

    private

    def dog_params
        params.permit(:user_id, :name, :breed, :sex, :age, :favorite_activity, :favorite_food)
    end
end
