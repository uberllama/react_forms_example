class Post extends React.Component {

  render() {
    return (
      <li>
        <h1>{this.props.post.category.name}</h1>
        <h2>{this.props.post.title}</h2>
        <p>
          {this.props.post.body}
        </p>
        <Link to='editPost' params={{id: this.props.post.id}} className="btn btn-xs btn-default">Edit</Link>
      </li>
    )
  }

}

Post.propTypes = {
  post: React.PropTypes.object.isRequired
}
