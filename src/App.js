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
          generalStatus: 'edit',
          //education
          schoolName: '',
          titleName: '',
          dateOfStudy: '',
          educationStatus: 'edit',
          //work experience
          companyName: '',
          positionTitle: '',
          mainJobTasks: '',
          dateAtTheJob: '',
          workStatus:'edit'
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
    const btnName = e.target.className
    this.setState({[btnName]: 'done'})
  }

  handleEdit(e) {
    e.preventDefault();
    const btnName = e.target.className
      this.setState({[btnName]: 'edit'})
  }

  render() {
    const {firstName, lastName, email, number, schoolName, titleName, dateOfStudy, companyName, positionTitle, mainJobTasks, dateAtTheJob, generalStatus, educationStatus, workStatus } = this.state
      return (
        <div className="App">
          <h1>CV from scratch</h1>
          <GeneralInfo 
            firstName={firstName}
            lastName={lastName}
            email={email}
            number={number}
            generalStatus={generalStatus}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            handleEdit={this.handleEdit}
          />
          <EducationInfo 
            schoolName={schoolName}
            titleName={titleName}
            dateOfStudy={dateOfStudy}
            educationStatus={educationStatus}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            handleEdit={this.handleEdit}
          />
          <WorkExperienceInfo 
            companyName={companyName}
            positionTitle={positionTitle}
            mainJobTasks={mainJobTasks}
            dateAtTheJob={dateAtTheJob}
            workStatus={workStatus}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            handleEdit={this.handleEdit}
          />
        </div>
      )
    }
}

export default App;