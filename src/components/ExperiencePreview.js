import React, { Component } from 'react';

class ExperiencePreview extends Component {
  render() {
    const { formArray } = this.props;
    const experiencePreview = formArray.map((value, index) => (
      <div key={index} className="my-1 px-7">
        {value.location ? (
          <div>
            <p className="text-lg font-medium">
              {value.company}, {value.location}
            </p>
          </div>
        ) : (
          <div>
            <p className="text-lg font-medium">{value.company}</p>
          </div>
        )}
        {value.start ? (
          <div>
            <p className="text-sm font-medium">
              {value.position}, {value.start} - {value.end}
            </p>
          </div>
        ) : (
          <div>
            <p className="text-sm font-medium">
              {value.position}
              {value.end && <span>, {value.end}</span>}
            </p>
          </div>
        )}
        <div>
          <p className="whitespace-pre-line">{value.description}</p>
        </div>
      </div>
    ));
    return (
      <div className="px-5">
        {formArray.length > 0 && (
          <h2 className="text-xl font-medium my-2">Experience</h2>
        )}
        {experiencePreview}
      </div>
    );
  }
}
export default ExperiencePreview;
