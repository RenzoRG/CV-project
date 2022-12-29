import React from 'react'
import GeneralInfo from './components/GeneralInfo';
import EducationInfo from './components/EducationInfo';
import WorkExperienceInfo from './components/WorkExperienceInfo';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
          //general info
          firstName: '',
          lastName: '',
          email: '',
          number: '',
          //education
          schoolName: '',
          titleName: '',
          dateOfStudy: '',
          //work experience
          companyName: '',
          positionTitle: '',
          mainJobTasks: '',
          dateAtTheJob: '',
          //status of the form
          status:'edit'
        }

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleEdit = this.handleEdit.bind(this)
      }

  handleChange(e) {
    const inputName = e.target
    this.setState({[inputName.name]: inputName.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({status: 'done'})
  }

  handleEdit(e) {
    e.preventDefault();
    this.setState({status: 'edit'})
  }

  render() {
    const {firstName, lastName, email, number, schoolName, titleName, dateOfStudy, companyName, positionTitle, mainJobTasks, dateAtTheJob, status } = this.state
      return (
        <div className="App">
          <GeneralInfo 
            firstName={firstName}
            lastName={lastName}
            email={email}
            number={number}
            status={status}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            handleEdit={this.handleEdit}
          />
          <EducationInfo 
            schoolName={schoolName}
            titleName={titleName}
            dateOfStudy={dateOfStudy}
            status={status}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            handleEdit={this.handleEdit}
          />
          <WorkExperienceInfo 
            companyName={companyName}
            positionTitle={positionTitle}
            mainJobTasks={mainJobTasks}
            dateAtTheJob={dateAtTheJob}
            status={status}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            handleEdit={this.handleEdit}
          />
        </div>
      )
    }
}

export default App;