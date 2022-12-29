import React from 'react'

class WorkExperienceInfo extends React.Component {
    render() {
        const {companyName, positionTitle, mainJobTasks, dateAtTheJob, workStatus} = this.props
        const workStatusBtn = 'workStatus'
        if ( workStatus === 'edit') {
          return (
              <form className={workStatusBtn} onSubmit={this.props.handleSubmit}>
                <label htmlFor='companyName'></label>
                <input
                  name='companyName'
                  value={companyName}
                  onChange={this.props.handleChange}
                  placeholder='Company'
                  type='text'
                  required
                />
                <label htmlFor='positionTitle'></label>
                <input
                  name='positionTitle'
                  value={positionTitle}
                  onChange={this.props.handleChange}
                  placeholder='Job title'
                  type="text"
                  required
                />
                <label htmlFor='mainJobTasks'></label>
                <textarea
                  name='mainJobTasks'
                  value={mainJobTasks}
                  onChange={this.props.handleChange}
                  placeholder='Your tasks at the job'
                  required
                />
                <label htmlFor='dateAtTheJob'></label>
                <input
                  name='dateAtTheJob'
                  value={dateAtTheJob}
                  onChange={this.props.handleChange}
                  placeholder='Start and end date at the job'
                  type='text'
                  required
                />
                <button type='submit'>Submit</button>
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