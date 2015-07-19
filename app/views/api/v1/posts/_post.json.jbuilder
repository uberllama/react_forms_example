json.extract!(post, :id, :category_id, :title, :body)
json.category do
  json.extract!(post.category, :id, :name)
end
