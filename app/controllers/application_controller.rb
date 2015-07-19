class ApplicationController < ActionController::Base

  # Renders { errors: { name: [errors] } } object for the record
  def render_errors(record)
    render json: { errors: record.errors.messages }, status: :unprocessable_entity
  end

end
