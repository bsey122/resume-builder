import React, { Component } from 'react';
import Education from './components/Education';
import Experience from './components/Experience';
import PersonalDetails from './components/PersonalDetails';
import ResumePreview from './components/ResumePreview';
import { education, experience } from './data';

class App extends Component {
  constructor(props) {
    super(props);
    this.educationFields = education.reduce((result, item) => {
      result[item.name] = '';
      return result;
    }, {});
    this.experienceFields = experience.reduce((result, item) => {
      result[item.name] = '';
      return result;
    }, {});
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      address: '',
      educationForms: [{ ...this.educationFields }],
      experienceForms: [{ ...this.experienceFields }],
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleEducationFormChange = (e, index) => {
    let data = [...this.state.educationForms];
    data[index][e.target.name] = e.target.value;
    this.setState({ data });
  };
  handleExperienceFormChange = (e, index) => {
    let data = [...this.state.experienceForms];
    data[index][e.target.name] = e.target.value;
    this.setState({ data });
  };
  addEducationForm = () => {
    this.setState({
      educationForms: this.state.educationForms.concat({
        ...this.educationFields,
      }),
    });
  };
  addExperienceForm = () => {
    this.setState({
      experienceForms: this.state.experienceForms.concat({
        ...this.experienceFields,
      }),
    });
  };
  removeEducationForm = (e, index) => {
    e.preventDefault();
    const data = [...this.state.educationForms];
    data.splice(index, 1);
    this.setState({ educationForms: data });
  };
  removeExperienceForm = (e, index) => {
    e.preventDefault();
    const data = [...this.state.experienceForms];
    data.splice(index, 1);
    this.setState({ experienceForms: data });
  };
  render() {
    return (
      <div className="bg-slate-300">
        <div className="grid grid-cols-12 gap-x-4 gap-y-2 mx-4 md:mx-6 lg:mx-24 lg:gap-x-6">
          <div className="col-span-6 my-2">
            <div className="col-span-6">
              <PersonalDetails onChange={this.handleChange} />
            </div>
            <div className="row-start-2 col-span-6">
              <Education
                inputs={education}
                forms={this.state.educationForms}
                onChange={this.handleEducationFormChange}
                addForm={this.addEducationForm}
                removeForm={this.removeEducationForm}
              />
              <Experience
                inputs={experience}
                forms={this.state.experienceForms}
                onChange={this.handleExperienceFormChange}
                addForm={this.addExperienceForm}
                removeForm={this.removeExperienceForm}
              />
            </div>
          </div>
          <div className="col-start-7 col-span-6">
            <ResumePreview state={this.state} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
