import React from 'react'

class GeneralInfo extends React.Component {
    render() {
        const {firstName, lastName, email, number, status} = this.props
        if ( status === 'edit') {
          return (
              <form onSubmit={this.props.handleSubmit}>
                <label htmlFor='firstName'></label>
                <input
                  name='firstName'
                  value={firstName}
                  onChange={this.props.handleChange}
                  type='text'
                />
                <label htmlFor='lastName'></label>
                <input
                  name='lastName'
                  value={lastName}
                  onChange={this.props.handleChange}
                  type='text'
                />
                <label htmlFor='email'></label>
                <input
                  name='email'
                  value={email}
                  onChange={this.props.handleChange}
                  type='email'
                />
                <label htmlFor='number'></label>
                <input
                  name='number'
                  value={number}
                  onChange={this.props.handleChange}
                  type='number'
                />
                <button type='submit'>Submit</button>
              </form>
          )
        }
        return(
          <div>
            <h1>{firstName}</h1>
            <h1>{lastName}</h1>
            <h1>{email}</h1>
            <h1>{number}</h1>
            <button onClick={this.props.handleEdit}>Edit</button>
          </div>
        )
        }
}

export default GeneralInfo