import React from 'react'

class GeneralInfo extends React.Component {
    render() {
        const {name, email, number, generalStatus, handleSubmit} = this.props
        const generalStatusBtn = 'generalStatus'
        if ( generalStatus === 'edit') {
          return (
              <form className={generalStatusBtn} onSubmit={handleSubmit}>
                <fieldset>
                  <legend>Your general info:</legend>
                  <label htmlFor='name'>name:</label>
                  <input
                    name='name'
                    value={name}
                    onChange={this.props.handleChange}
                    placeholder='First name'
                    type='text'
                    required
                    />
                  <label htmlFor='email'>email:</label>
                  <input
                    name='email'
                    value={email}
                    onChange={this.props.handleChange}
                    placeholder='email'
                    type='email'
                    required
                  />
                  <label htmlFor='number'>phone number:</label>
                  <input
                    name='number'
                    value={number}
                    onChange={this.props.handleChange}
                    placeholder='Phone number'
                    type='number'
                    required
                    />
                  <button type='submit'>Submit</button>
                </fieldset>
              </form>
          )
        }
        return(
          <div>
            <h1>{name}</h1>
            <h1>{email}</h1>
            <h1>{number}</h1>
            <button className={generalStatusBtn} onClick={this.props.handleEdit}>Edit</button>
          </div>
        )
        }
}

export default GeneralInfo