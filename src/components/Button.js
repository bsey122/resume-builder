import React, { Component } from 'react';

class Button extends Component {
  render() {
    const { handleClick, children } = this.props;

    return (
      <button
        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleClick}
      >
        {children}
      </button>
    );
  }
}

export default Button;
