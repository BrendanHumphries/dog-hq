class DogsController < ApplicationController
    def index
        render json: {photo: rails_blob_path(Dog.first.profile_photo)}
    end
end
