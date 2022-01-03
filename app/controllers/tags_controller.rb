class TagsController < ApplicationController
    def index
        render json: Tag.all, status: :ok
    end

    def show
        render json: Tag.find(params[:id]), status: :ok
    end

    def create
        render json: Tag.create!(tag_params), status: :created
    end

    def destroy
        render json: Tag.find(params[:id]).destroy
        head :no_content
    end

    private

    def tag_params
        params.permit(:post_id, :tag_id)
    end
end