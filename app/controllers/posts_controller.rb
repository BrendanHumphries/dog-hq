class PostsController < ApplicationController
    def index
        render json: Post.all, status: :ok
    end

    def show
        render json: Post.find(params[:id]), status: :ok
    end

    def create
        render json: Post.create!(post_params), status: :created
    end

    def update
        render json: Post.find(params[:id]).update!(post_params), status: :ok
    end

    def destroy
        Post.find(params[:id]).destroy
        head :no_content
    end

    private

    def post_params
        params.permit(:dog_id, :post_text, :location)
    end
end
