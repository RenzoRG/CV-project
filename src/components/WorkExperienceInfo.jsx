import React from 'react'

class WorkExperienceInfo extends React.Component {
    render() {
        const {companyName, positionTitle, mainJobTasks, dateAtTheJob, status} = this.props
        if ( status === 'edit') {
          return (
              <form onSubmit={this.props.handleSubmit}>
                <label htmlFor='companyName'></label>
                <input
                  name='companyName'
                  value={companyName}
                  onChange={this.props.handleChange}
                />
                <label htmlFor='positionTitle'></label>
                <input
                  name='positionTitle'
                  value={positionTitle}
                  onChange={this.props.handleChange}
                />
                <label htmlFor='mainJobTasks'></label>
                <input
                  name='mainJobTasks'
                  value={mainJobTasks}
                  onChange={this.props.handleChange}
                />
                <label htmlFor='dateAtTheJob'></label>
                <input
                  name='dateAtTheJob'
                  value={dateAtTheJob}
                  onChange={this.props.handleChange}
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
            <button onClick={this.props.handleEdit}>Edit</button>
          </div>
        )
        }
}

export default WorkExperienceInfo