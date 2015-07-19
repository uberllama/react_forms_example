task clear_posts: :environment do
  Post.delete_all
end
