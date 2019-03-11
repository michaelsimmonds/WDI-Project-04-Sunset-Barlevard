import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'
import BarForm from './BarForm'

class BarsNew extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        name: '',
        address: '',
        lat: '',
        lng: '',
        terrace: '',
        description: '',
        hero: '',
        location: ''
      },
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.suggestionSelect = this.suggestionSelect.bind(this)
  }

  handleChange({ target: { name, value }}) {
    const data = {...this.state.data, [name]: value}
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios
      .post('/api/bars', this.state.data,
        { headers: {Authorization: `Bearer ${Auth.getToken()}`}})
      .then(this.props.history.push('/crawls/new'))
      .catch(err => this.setState({ errors: err.response.data }))
  }

  suggestionSelect(result, lat, lng) {
    const data = {...this.state.data, address: result, lat: lat, lng: lng }
    const errors = {...this.state.errors, address: '' }
    this.setState({ data, errors })
  }

  render() {
    return(
      <main className="section grey-background">
        <div className="container">
          <BarForm
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            suggestionSelect={this.suggestionSelect}
            data={this.state.data}
          />
        </div>
      </main>
    )
  }
}

export default BarsNew
