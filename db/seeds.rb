Category.delete_all
Post.delete_all
Category.create!(name: "Cats")
Category.create!(name: "Politics")
Category.create!(name: "Spaceships")
Post.create!(category: Category.first, title: "I like cats", body: "Lorem dim sum")
