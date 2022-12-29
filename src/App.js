import React from 'react'
import GeneralInfo from './components/GeneralInfo';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
          //general info
          firstName: '',
          lastName: '',
          email: '',
          number: '',
          //education
          title: '',

          //switch from submit to edit
          status:'edit'
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
    this.setState({status: 'done'})
  }

  handleEdit(e) {
    e.preventDefault();
    this.setState({status: 'edit'})
  }

  render() {
    const {firstName, lastName, email, number, status} = this.state
      return (
        <div className="App">
          <GeneralInfo 
            firstName={firstName}
            lastName={lastName}
            email={email}
            number={number}
            status={status}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            handleEdit={this.handleEdit}
          />
        </div>
      )
    }
}

export default App;