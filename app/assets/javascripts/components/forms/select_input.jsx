class SelectInput extends BaseInput {

  render() {
    let options = _.map(this.props.options, function(option) {
      let id = option.id || option;
      let name = option.name || option;
      return <option key={id} value={id}>{name}</option>;
    });
    options.unshift(<option key="-1" value="">Choose one...</option>);

    return (
      <InputWrapper errors={this.props.errors}>
        <label>{this.props.name}</label>
        <select
          className={this.props.className}
          name={this.props.name}
          value={this.props.value}
          onChange={this.handleChange}>
          {options}
        </select>
      </InputWrapper>
    )
  }

}

SelectInput.propTypes = _.merge({}, BaseInput.propTypes, {
  options: React.PropTypes.array.isRequired
});
