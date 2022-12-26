import React from 'react'
import './styles/styles.css'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      form: {
        'personal info': {
          'first name': '',
          'last name': '',
          email: 'email',
          'phone number': 'phone number',
        },
        education: {
          'school name': 'school name',
          'title': 'title',
          graduation: 'year of graduation',
        },
        'work experience': {
          'company name': 'company name',
          'position title': 'position title',
          'job tasks': 'job tasks',
          'starting date': 'starting date of the job',
          'ending date': 'last day at the job'
        }
      }
    }
  }
render()
{  return (
    <div className="App">
      <header className="header">
        <h1>CV Application creator</h1>
      </header>
      <div className="main">
        <div className="form container">
          <form className="section generalInfo">
            <label>Personal info:</label>
            <input placeholder='first name'/>
            <input placeholder='last name'/>
            <input placeholder='email'/>
            <input placeholder='phone number'/>
          </form>
          <form className="section education">
            <label>Education info:</label>
            <input placeholder='school name'/>
            <input placeholder='title'/>
            <input placeholder='year of graduation'/>
          </form>
          <form className="section work">
            <label>Work experience info:</label>
            <input placeholder='company name'/>
            <input placeholder='position title'/>
            <input placeholder='job tasks'/>
            <input placeholder='starting date on the job'/>
            <input placeholder='ending date on the job'/>
          </form>
        </div>
        <div>
          <section>
            <p>first name</p>
            <p>last name</p>
            <p>email</p>
            <p>phone number</p>
          </section>
        </div>
      </div>        
    </div>
  );}
}

export default App;

{/* each section should have an edit and submit button
<h1>section with general info: name, email, phone number</h1>
<h1>section with education info: school name, title of study date of study</h1>
<h1>section with practical experience: company name, position title, main tasks of our jobs, date from and until when we worked at that company</h1>
    */}