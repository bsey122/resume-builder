import React, { Component } from 'react';

class PersonalDetailsPreview extends Component {
  render() {
    const { firstName, lastName, email, phoneNumber, address } = this.props;
    return (
      <div className="bg-gray-400 px-5">
        <div>
          <h2 className="text-3xl font-light py-2">
            {firstName} {lastName}
          </h2>
        </div>
        <div className="flex gap-3 justify-center text-sm py-2">
          <p>{email}</p>
          <p>{phoneNumber}</p>
          <p>{address}</p>
        </div>
      </div>
    );
  }
}
export default PersonalDetailsPreview;
