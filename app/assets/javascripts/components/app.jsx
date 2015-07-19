class App extends React.Component {

  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <Link to='posts'>Posts</Link>&nbsp;
          <Link to='newPost'>Create Post</Link>
          <div>
            <RouteHandler params={this.props.params} query={this.props.query} />
          </div>
        </div>
      </div>
    )
  }

};
