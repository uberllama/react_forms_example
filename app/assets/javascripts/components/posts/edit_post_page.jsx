class EditPostPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = { loaded: false };
    this.handleSuccess = this.handleSuccess.bind(this);
  }

  componentDidMount() {
    PostStore.getResource(this.props.params.postId).then(data => {
      this.setState({
        loaded: true,
        post:   data.post
      });
    });
  }

  handleSuccess() {
    this.context.router.transitionTo('posts');
  }

  render() {
    if (!this.state.loaded) { return <div>Loading...</div>; }

    return (
      <div>
        <PostForm
          resource={this.state.post}
          onSuccess={this.handleSuccess}
          onDestroy={this.handleSuccess} />
      </div>
    )
  }

}

EditPostPage.contextTypes = {
  router: React.PropTypes.func
};
