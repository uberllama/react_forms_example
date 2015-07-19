class BaseForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      loaded:   false,
      resource: this.props.resource,
      errors:   {}
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit      = this.handleSubmit.bind(this);
    this.handleDestroy     = this.handleDestroy.bind(this);
  }

  // Helper to generate props for input components based on their key (attribute name)
  getInputProps(attr) {
    return {
      name:          attr,
      value:         this.state.resource[attr],
      errors:        this.state.errors[attr],
      onInputChange: this.handleInputChange
    };
  }

  // Update resource state when an input is changed
  handleInputChange(name, value) {
    this.setState(function(previousState) {
      let resource = previousState.resource;
      resource[name] = value;
      return { resource: resource };
    });
  }

  // Create/update resource on form submit and handle success/failure
  handleSubmit(e) {
    e.preventDefault();
    if (_.isEmpty(this.state.resource)) { return; } // don't submit empty forms

    let action = this.state.resource.id ? 'updateResource' : 'createResource';
    let deferred = this.store[action](this.state.resource);

    deferred
    .done(data => {
      this.props.onSuccess(data);
    })
    .fail(xhr => {
      this.setState({
        errors: JSON.parse(xhr.responseText).errors
      });
    });
  }

  // Destroy resource
  handleDestroy(e) {
    e.preventDefault();
    if (!confirm('Delete this record?')) { return; }

    this.store.destroyResource(this.state.resource).then(() => {
      this.props.onDestroy();
    });
  }

}

BaseForm.propTypes = {
  resource:  React.PropTypes.object.isRequired,
  onDestroy: React.PropTypes.func,
  onSuccess: React.PropTypes.func.isRequired
}
