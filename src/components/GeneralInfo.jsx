import React from 'react'

class GeneralInfo extends React.Component {
    render() {
        const {firstName, lastName, email, number, generalStatus, handleSubmit} = this.props
        const generalStatusBtn = 'generalStatus'
        if ( generalStatus === 'edit') {
          return (
              <form className={generalStatusBtn} onSubmit={handleSubmit}>
                <label htmlFor='firstName'></label>
                <input
                  name='firstName'
                  value={firstName}
                  onChange={this.props.handleChange}
                  placeholder='First name'
                  type='text'
                  required
                />
                <label htmlFor='lastName'></label>
                <input
                  name='lastName'
                  value={lastName}
                  onChange={this.props.handleChange}
                  placeholder='Last name'
                  type='text'
                  required
                />
                <label htmlFor='email'></label>
                <input
                  name='email'
                  value={email}
                  onChange={this.props.handleChange}
                  placeholder='email'
                  type='email'
                  required
                />
                <label htmlFor='number'></label>
                <input
                  name='number'
                  value={number}
                  onChange={this.props.handleChange}
                  placeholder='Phone number'
                  type='number'
                  required
                />
                <button type='submit'>Submit</button>
              </form>
          )
        }
        return(
          <div>
            <h1>{firstName + " " + lastName}</h1>
            <h1>{email}</h1>
            <h1>{number}</h1>
            <button className={generalStatusBtn} onClick={this.props.handleEdit}>Edit</button>
          </div>
        )
        }
}

export default GeneralInfo