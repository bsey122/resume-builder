import React, { Component } from 'react';
import Input from './Input';

class PersonalDetails extends Component {
  render() {
    const { onChange } = this.props;
    return (
      <>
        <div className="bg-slate-50 p-4 rounded-lg sm:w-full sm:max-w-md shadow-md">
          <h2 className="text-xl font-medium">Personal Details</h2>
        </div>
        <form className="bg-slate-50 p-4 rounded-lg sm:w-full sm:max-w-md shadow-md my-2">
          <Input
            type="text"
            id="firstName"
            name="firstName"
            labelText="First Name"
            onChange={onChange}
          />
          <Input
            type="text"
            id="lastName"
            name="lastName"
            labelText="Last Name"
            onChange={onChange}
          />
          <Input
            type="email"
            id="email"
            name="email"
            labelText="Email"
            onChange={onChange}
          />
          <Input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            labelText="Phone Number"
            onChange={onChange}
          />
          <Input
            type="text"
            id="address"
            name="address"
            labelText="Address"
            onChange={onChange}
          />
        </form>
      </>
    );
  }
}
export default PersonalDetails;
