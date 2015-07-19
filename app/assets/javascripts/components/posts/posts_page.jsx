class PostsPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = { loaded: false };
  }

  componentDidMount() {
    PostStore.getResources().then(data => {
      this.setState({
        loaded: true,
        posts:  data.posts
      });
    });
  }

  render() {
    if (!this.state.loaded) { return <div>Loading...</div>; }

    let posts = _.map(this.state.posts, function(post) {
      return <Post key={post.id} post={post} />;
    });

    return (
      <ul>
        {posts}
      </ul>
    )
  }

}
