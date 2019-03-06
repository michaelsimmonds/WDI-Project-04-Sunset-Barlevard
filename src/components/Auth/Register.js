import React from 'react'
import axios from 'axios'
import ReactFilestack from 'filestack-react'

class Register extends React.Component{
  constructor(){
    super()

    this.state = {
      data: {
        username: '',
        email: '',
        password: '',
        password_confirmation: '',
        bio: '',
        image: ''
      },
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({ target: { name, value }}) {
    const data = {...this.state.data, [name]: value}
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios
      .post('/api/register', this.state.data)
      .then(() => this.props.history.push('/login'))
      .catch(err => this.setState({ errors: err.response.data }))
  }

  changeSuccess(){
    this.setState({ imageSuccess: true })
  }

  render(){
    const errorMessages = Object.keys(this.state.errors).map(errorKey => {
      return this.state.errors[errorKey]
    })
    if(!this.state.data) return null
    return(
      <main className="register">
        <section className="section">

          <div className="container">
            <div className="columns">
              <div className="column is-6 is-offset-3">
                <h1 className="title title-font center is-3">REGISTER</h1>
                {errorMessages.length > 0 && <p
                  className="error center"
                >
                  {errorMessages}
                </p>}
                <form onSubmit={this.handleSubmit}>
                  <div className="field">
                    <label>Create a Username *</label>
                    <p className="control has-icons-left has-icons-right">
                      <input
                        className="input"
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
                    <label>Enter Your Email *</label>
                    <p className="control has-icons-left has-icons-right">
                      <input className="input" type="email" name="email"                   value={this.state.data.email}
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
                    <label>Create a Password *</label>
                    <p className="control has-icons-left">
                      <input className="input" type="password" name="password"                   value={this.state.data.password}
                        onChange={this.handleChange}/>
                      <span className="icon is-small is-left">
                        <i className="fas fa-lock"></i>
                      </span>
                    </p>
                  </div>
                  <div className="field">
                    <label>Confirm Your Password *</label>
                    <p className="control has-icons-left">
                      <input className="input" type="password" name="password_confirmation" value={this.state.data.password_confirmation}
                        onChange={this.handleChange}/>
                      <span className="icon is-small is-left">
                        <i className="fas fa-lock"></i>
                      </span>
                    </p>
                  </div>
                  <div className="field">
                    <label>Add a bio *</label>
                    <p className="control has-icons-left">
                      <textarea className="textarea" name="bio" onChange={this.handleChange} value={this.state.data.bio}></textarea>
                      <span className="icon is-small is-left">
                        <i className="fas fa-lock"></i>
                      </span>
                    </p>
                  </div>

                  <div className="field">
                    <div className="control has-icons-left">

                      <div>
                        <ReactFilestack
                          apikey={ `${process.env.FILESTACK_API_KEY}` }
                          mode={'pick'}
                          onSuccess={(res) => this.handleChange({
                            target: {
                              name: 'image',
                              value: res.filesUploaded[0].url
                            }})}
                          onError={(e) => console.log(e)}
                          buttonText={'Add an Image *'}
                          buttonClass={'button register-button is-square'}
                        />
                      </div>

                    </div>
                  </div>
                  <div className="field center">
                    <button className="button button-styled">
                        Register
                    </button>
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

export default Register
