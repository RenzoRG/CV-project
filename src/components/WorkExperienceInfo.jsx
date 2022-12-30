import React from 'react'

class WorkExperienceInfo extends React.Component {
    render() {
        const {companyName, positionTitle, mainJobTasks, dateAtTheJob, workStatus} = this.props
        const workStatusBtn = 'workStatus'
        if ( workStatus === 'edit') {
          return (
              <form 
                className={workStatusBtn}
                onSubmit={this.props.handleSubmit}>
                <fieldset>
                  <legend>Your work experience:</legend>
                  <label htmlFor='companyName'>company:</label>
                  <input
                    name='companyName'
                    value={companyName}
                    onChange={this.props.handleChange}
                    placeholder='Company'
                    type='text'
                    required
                  />
                  <label htmlFor='positionTitle'>job title:</label>
                  <input
                    name='positionTitle'
                    value={positionTitle}
                    onChange={this.props.handleChange}
                    placeholder='Job title'
                    type="text"
                    required
                  />
                  <label htmlFor='mainJobTasks'>job tasks:</label>
                  <textarea
                    name='mainJobTasks'
                    value={mainJobTasks}
                    onChange={this.props.handleChange}
                    placeholder='Your tasks at the job'
                    required
                  />
                  <label htmlFor='dateAtTheJob'>time spend at the job:</label>
                  <input
                    name='dateAtTheJob'
                    value={dateAtTheJob}
                    onChange={this.props.handleChange}
                    placeholder='Start and end date at the job'
                    type='text'
                    required
                  />
                  <button type='submit'>Submit</button>
                </fieldset>
              </form>
          )
        }
        return(
          <div>
            <h1>{companyName}</h1>
            <h1>{positionTitle}</h1>
            <h1>{mainJobTasks}</h1>
            <h1>{dateAtTheJob}</h1>
            <button className={workStatusBtn} onClick={this.props.handleEdit}>Edit</button>
          </div>
        )
        }
}

export default WorkExperienceInfo