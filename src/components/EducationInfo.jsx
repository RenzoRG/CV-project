import React from 'react'

class EducationInfo extends React.Component {
    render() {
        const {schoolName, titleName, dateOfStudy, status} = this.props
        if ( status === 'edit') {
          return (
              <form onSubmit={this.props.handleSubmit}>
                <label htmlFor='schoolName'></label>
                <input
                  name='schoolName'
                  value={schoolName}
                  onChange={this.props.handleChange}
                />
                <label htmlFor='titleName'></label>
                <input
                  name='titleName'
                  value={titleName}
                  onChange={this.props.handleChange}
                />
                <label htmlFor='dateOfStudy'></label>
                <input
                  name='dateOfStudy'
                  value={dateOfStudy}
                  onChange={this.props.handleChange}
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
            <button onClick={this.props.handleEdit}>Edit</button>
          </div>
        )
        }
}

export default EducationInfo