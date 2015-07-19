class BaseForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      errors: {},
      loaded: false,
      model:  this.props.model
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit      = this.handleSubmit.bind(this);
    this.handleDestroy     = this.handleDestroy.bind(this);
  }

  // Update model state when an input is changed
  handleInputChange(name, value) {
    this.setState(function(previousState) {
      let model = previousState.model;
      model[name] = value;
      return { model: model };
    });
  }

  // Create/update resource on form submit and handle success/failure
  handleSubmit(e) {
    e.preventDefault();
    if (_.isEmpty(this.state.model)) { return; } // don't submit empty forms

    let action = this.state.model.id ? 'updateResource' : 'createResource';
    let deferred = this.store[action](this.state.model);

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

    this.store.destroyResource(this.state.model).then(() => {
      this.props.onDestroy();
    });
  }

  // Helper to generate props for input components based on their key (attribute name)
  getInputProps(name) {
    return {
      errors:        this.state.errors[name],
      name:          name,
      onInputChange: this.handleInputChange,
      value:         this.state.model[name]
    };
  }

}

BaseForm.propTypes = {
  model:     React.PropTypes.object.isRequired,
  onDestroy: React.PropTypes.func,
  onSuccess: React.PropTypes.func.isRequired
}
