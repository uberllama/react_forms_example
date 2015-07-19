class Api::V1::CategoriesController < ApplicationController

  def index
    @categories = Category.order(:name)
  end

end
