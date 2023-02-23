import React, { Component } from 'react';
import EducationPreview from './EducationPreview';
import ExperiencePreview from './ExperiencePreview';
import PersonalDetailsPreview from './PersonalDetailsPreview';

class ResumePreview extends Component {
  render() {
    const { state } = this.props;
    return (
      <div className="bg-white sm:w-full sm:max-w-xl sticky top-2 min-h-[40rem]">
        <PersonalDetailsPreview
          firstName={state.firstName}
          lastName={state.lastName}
          email={state.email}
          phoneNumber={state.phoneNumber}
          address={state.address}
        />
        <div className="py-5">
          <EducationPreview formArray={state.educationForms} />
          <ExperiencePreview formArray={state.experienceForms} />
        </div>
      </div>
    );
  }
}
export default ResumePreview;
