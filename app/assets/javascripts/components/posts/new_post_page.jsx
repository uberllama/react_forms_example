class NewPostPage extends React.Component {

  constructor(props) {
    super(props);
    this.handleSuccess = this.handleSuccess.bind(this);
  }

  handleSuccess() {
    this.context.router.transitionTo('posts');
  }

  render() {
    return (
      <div>
        <PostForm
          resource={{}}
          onSuccess={this.handleSuccess} />
      </div>
    )
  }

}

NewPostPage.contextTypes = {
  router: React.PropTypes.func
};
