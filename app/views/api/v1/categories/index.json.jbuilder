json.categories(@categories) do |category|
  json.partial!(category)
end
