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
        post = Post.find(params[:id])
        post.update!(post_params)
        render json: post, status: :ok
    end

    def destroy
        Post.find(params[:id]).destroy
        head :no_content
    end

    private

    def post_params
        params.permit(:dog_id, :post_text, :location, :photo)
    end
end
