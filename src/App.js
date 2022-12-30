import React from 'react'
import GeneralInfo from './components/GeneralInfo';
import EducationInfo from './components/EducationInfo';
import WorkExperienceInfo from './components/WorkExperienceInfo';
import './styles/App.css'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
          //general info
          name: '',
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
    const {name, email, number, schoolName, titleName, dateOfStudy, companyName, positionTitle, mainJobTasks, dateAtTheJob, generalStatus, educationStatus, workStatus } = this.state
    const { handleChange, handleSubmit, handleEdit } = this
      return (
        <div className="App">
          <header>
            <h1>CV from scratch</h1>
          </header>
            <div className='container'>
                <div className='form'>
                  <GeneralInfo 
                    name={name}
                    email={email}
                    number={number}
                    generalStatus={generalStatus}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    handleEdit={handleEdit}
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
              </div>
            <footer>
              <p></p>
              <img/>
            </footer>
        </div>
      )
    }
}

export default App;