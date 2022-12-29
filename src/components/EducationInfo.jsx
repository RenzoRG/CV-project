import React from 'react'

class EducationInfo extends React.Component {
    render() {
        const {schoolName, titleName, dateOfStudy, educationStatus} = this.props
        const educationStatusBtn = 'educationStatus'
        if ( educationStatus === 'edit') {
          return (
              <form className={educationStatusBtn} onSubmit={this.props.handleSubmit}>
                <label htmlFor='schoolName'></label>
                <input
                  name='schoolName'
                  value={schoolName}
                  onChange={this.props.handleChange}
                  placeholder='School'
                  type='text'
                  required
                />
                <label htmlFor='titleName'></label>
                <input
                  name='titleName'
                  value={titleName}
                  onChange={this.props.handleChange}
                  placeholder='title'
                  type='text'
                  required
                />
                <label htmlFor='dateOfStudy'></label>
                <input
                  name='dateOfStudy'
                  value={dateOfStudy}
                  onChange={this.props.handleChange}
                  placeholder='Start and end date of study'
                  type='text'
                  required
                />
                <button type='submit'>Submit</button>
              </form>
          )
        }
        return(
          <div>
            <h1>{schoolName}</h1>
            <h1>{titleName}</h1>
            <h1>{dateOfStudy}</h1>
            <button className={educationStatusBtn} onClick={this.props.handleEdit}>Edit</button>
          </div>
        )
        }
}

export default EducationInfo