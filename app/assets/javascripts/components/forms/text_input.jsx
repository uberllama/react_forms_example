class TextInput extends BaseInput {

  render() {
    return (
      <InputWrapper errors={this.props.errors}>
        <label>{this.props.name}</label>
        <input type="text"
          autoFocus={this.props.autoFocus}
          className={this.props.className}
          name={this.props.name}
          value={this.props.value}
          onChange={this.handleChange} />
      </InputWrapper>
    )
  }

}

TextInput.propTypes = _.merge({}, BaseInput.propTypes, {
  autoFocus: React.PropTypes.bool
});

TextInput.defaultProps = _.merge({}, BaseInput.defaultProps, {
  autoFocus: false
});
