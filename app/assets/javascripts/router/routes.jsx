let routes = (
  <Route handler={App}>
    <Route name='newPost' path='/posts/new' handler={NewPostPage} />
    <Route name='editPost' path='/posts/:postId/edit' handler={EditPostPage} />
    <DefaultRoute name='posts' handler={PostsPage} />
  </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler, state) {
  React.render(<Handler params={state.params} query={state.query} />, document.getElementById('app'));
});
