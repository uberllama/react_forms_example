json.posts(@posts) do |post|
  json.partial!(post)
end
