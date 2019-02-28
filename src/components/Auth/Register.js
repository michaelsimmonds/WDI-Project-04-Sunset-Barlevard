import React from 'react'
import axios from 'axios'

class Register extends React.Component{
  constructor(){
    super()

    this.state = {
      data: {
        username: '',
        email: '',
        password: '',
        password_confirmation: '',
        bio: ''
      }
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({target: {name, value }}) {
    const data = {...this.state.data, [name]: value }
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios
      .post('/api/register', this.state.data)
      .then(() => this.props.history.push('/login'))
      .catch(err => alert(err.message))
  }

  render(){
    if(!this.state.data) return null
    return(
      <main>
        <section className="section">

          <div className="container">
            <h1>Register</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="field">
                <label>Create a Username</label>
                <p className="control has-icons-left has-icons-right">
                  <input
                    className="input"
                    placeholder="Username"
                    name="username" value={this.state.data.username}
                    onChange={this.handleChange}/>
                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <span className="icon is-small is-right">
                    <i className="fas fa-check"></i>
                  </span>
                </p>
              </div>
              <div className="field">
                <label>Enter Your Email</label>
                <p className="control has-icons-left has-icons-right">
                  <input className="input" type="email" placeholder="Email" name="email"                   value={this.state.data.email}
                    onChange={this.handleChange}/>
                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <span className="icon is-small is-right">
                    <i className="fas fa-check"></i>
                  </span>
                </p>
              </div>
              <div className="field">
                <label>Create a Password</label>
                <p className="control has-icons-left">
                  <input className="input" type="password" placeholder="Password" name="password"                   value={this.state.data.password}
                    onChange={this.handleChange}/>
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock"></i>
                  </span>
                </p>
              </div>
              <div className="field">
                <label>Confirm Your Password</label>
                <p className="control has-icons-left">
                  <input className="input" type="password" placeholder="Password" name="password_confirmation" value={this.state.data.password_confirmation}
                    onChange={this.handleChange}/>
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock"></i>
                  </span>
                </p>
              </div>
              <div className="field">
                <label>Add a bio</label>
                <p className="control has-icons-left">
                  <textarea className="textarea" placeholder="e.g. Hello world" name="bio" onChange={this.handleChange} value={this.state.data.bio}></textarea>
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock"></i>
                  </span>
                </p>
              </div>
              <div className="field">
                <p className="control">
                  <button className="button is-success">
                    Register
                  </button>
                </p>
              </div>
            </form>
          </div>
        </section>
      </main>
    )
  }
}

export default Register
