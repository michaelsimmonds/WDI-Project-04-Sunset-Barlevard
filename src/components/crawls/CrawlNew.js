import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'
import CrawlForm from './CrawlForm'
import BarsIndex from '../bars/BarsIndex'


class CrawlNew extends React.Component{
  constructor(){
    super()

    this.state = {
      data: {
        name: '',
        description: ''
      }
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)

  }

  handleChange({ target: { name, value }}) {
    console.log(this.state.data)
    const data = {...this.state.data, [name]: value}
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios
      .post('/api/crawls', this.state.data,
        { headers: {Authorization: `Bearer ${Auth.getToken()}`}})
      .then(() => this.props.history.push('/crawls'))
      .catch(err => alert(err.message))
  }

  render() {
    return (
      <main className="section">
        <div className="container">
          <CrawlForm
            data={this.state.data}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
          <BarsIndex />
        </div>
      </main>
    )
  }
}

export default CrawlNew
