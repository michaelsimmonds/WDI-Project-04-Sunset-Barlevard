import React from 'react'
import axios from 'axios'

import Auth from '../../lib/Auth'
import Flash from '../../lib/Flash'

class Login extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        email: '',
        password: ''
      },
      errors: {}
    }
    this.handleChange =  this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({ target: { name, value }}) {
    const data = {...this.state.data, [name]: value }
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()

    axios
      .post('/api/login', this.state.data)
      .then((res) => {
        Auth.setToken(res.data.token)
        Flash.setMessage('success', res.data.message)
        this.props.history.push('/')
      })
      .catch(err => this.setState({ errors: err.response.data }))
  }

  render() {
    const errorMessages = Object.keys(this.state.errors).map(errorKey => {
      return this.state.errors[errorKey]
    })
    return (
      <main className="login">
        <section className="section section-height">
          <div className="container">
            <div className="columns">
              <div className="column is-6 is-offset-3">
                <form onSubmit={this.handleSubmit}>
                  <h2 className="title title-font center">LOGIN</h2>
                  {errorMessages.length > 0 && <p
                    className="error center">{    errorMessages
                    }
                  </p>}
                  <div className="field">
                    <label className="label title-font">Email *</label>
                    <div className="control">
                      <input
                        className="input"
                        name="email"
                        value={this.state.data.email}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label title-font">Password *</label>
                    <div className="control">
                      <input
                        type="password"
                        className="input"
                        name="password"
                        value={this.state.data.password}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="center">
                    <button className="button button-styled">Log In</button>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  }
}

export default Login
