import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Selectbox extends Component {
  static propTypes = {
    options: PropTypes.array.isRequired,
    classes: PropTypes.string,
    handleOnChange: PropTypes.func.isRequired
  };

  state = {};

  createOptions = options =>
    options.map(item => {
      return (
        <option value={item.value} key={item.value}>
          {item.label}
        </option>
      );
    });

  onChange = e => {
    this.props.handleOnChange(e.target.value);
  };

  render() {
    const { classes, options } = this.props;
    return (
      <div className='sort'>
        Order by
        <select onChange={e => this.onChange(e)} className={classes}>
          {this.createOptions(options)}
        </select>
      </div>
    );
  }
}
export default Selectbox;
