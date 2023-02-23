import React, { Component } from 'react';

class EducationPreview extends Component {
  render() {
    const { formArray } = this.props;
    const educationPreview = formArray.map((value, index) => (
      <div key={index} className="my-1 px-7">
        {value.location ? (
          <div>
            <p className="text-lg font-medium">
              {value.school}, {value.location}
              {value.degree && (
                <span className="font-normal"> | {value.degree}</span>
              )}
            </p>
          </div>
        ) : (
          <div>
            <p className="text-lg font-medium">
              {value.school}
              {value.degree && (
                <span className="font-normal"> | {value.degree}</span>
              )}
            </p>
          </div>
        )}
        {value.start ? (
          <div>
            <p className="text-sm font-medium">
              {value.start} - {value.end}
            </p>
          </div>
        ) : (
          <div>
            <p className="text-sm font-medium">{value.end}</p>
          </div>
        )}
      </div>
    ));
    return (
      <div className="px-5">
        {formArray.length > 0 && (
          <h2 className="text-xl font-medium my-2">Education</h2>
        )}
        {educationPreview}
      </div>
    );
  }
}
export default EducationPreview;
