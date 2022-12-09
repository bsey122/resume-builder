import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { type, id, labelText, onChange, name } = this.props;
    return (
      <div>
        <label htmlFor={id}>{labelText}</label>
        <input
          type={type}
          id={id}
          name={name}
          onChange={onChange}
          className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm"
        />
      </div>
    );
  }
}
export default Input;
