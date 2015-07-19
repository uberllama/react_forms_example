class BaseInput extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  // Update parent form's resource state
  handleChange(e) {
    this.props.onInputChange(this.props.name, e.target.value);
  }

}

BaseInput.propTypes = {
  className:     React.PropTypes.string,
  errors:        React.PropTypes.array,
  name:          React.PropTypes.string.isRequired,
  onInputChange: React.PropTypes.func.isRequired,
  value:         React.PropTypes.any
};

BaseInput.defaultProps = {
  className: 'form-control'
};
