import React, { Component } from 'react';
import Button from './Button';
import Input from './Input';

class Experience extends Component {
  render() {
    const { inputs, forms, onChange, addForm, removeForm } = this.props;

    const formElement = forms.map((form, formIndex) => (
      <form
        key={formIndex}
        className="bg-slate-50 p-4 rounded-lg sm:w-full sm:max-w-md shadow-md my-2"
      >
        {inputs.map((input, inputIndex) =>
          input.type === 'textarea' ? (
            <div key={inputIndex}>
              <label htmlFor={input.id}>{input.labelText}</label>
              <textarea
                id={input.id}
                name={input.name}
                onChange={(e) => onChange(e, formIndex)}
                className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm"
              />
            </div>
          ) : (
            <Input
              key={inputIndex}
              type={input.type}
              id={input.id}
              name={input.name}
              labelText={input.labelText}
              onChange={(e) => onChange(e, formIndex)}
              value={form[input.name]}
            ></Input>
          )
        )}
        <div className=" flex flex-col my-4">
          <Button
            children="Remove"
            handleClick={(e) => removeForm(e, formIndex)}
          />
        </div>
      </form>
    ));
    return (
      <>
        <div className="bg-slate-50 p-4 rounded-lg sm:w-full sm:max-w-md shadow-md my-2">
          <h2 className="text-xl font-medium">Experience</h2>
        </div>
        {formElement}
        <div className="flex flex-col bg-slate-50 p-4 rounded-lg sm:w-full sm:max-w-md shadow-md my-2">
          <Button children="Add" handleClick={addForm} />
        </div>
      </>
    );
  }
}
export default Experience;
