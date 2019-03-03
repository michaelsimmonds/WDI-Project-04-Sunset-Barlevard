import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'
import CrawlForm from './CrawlForm'
import BarCard from '../bars/BarCard.js'

class CrawlNew extends React.Component{
  constructor(){
    super()

    this.state = {
      bars: [],
      data: {
        name: '',
        description: '',
        stops: []
      }
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)

  }

  componentDidMount() {
    axios.get('/api/bars')
      .then(res => this.setState({ bars: res.data }))
  }

  handleChange({ target: { name, value }}) {
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

  //=====================REACT SELECT======================

  render() {
    console.log(this.state.data)
    return (
      <main className="section">
        <div className="container">
          <CrawlForm
            data={this.state.data}
            handleChange={this.handleChange}
            handleFormChange={this.handleFormChange}
            handleSubmit={this.handleSubmit}
            handleSelect={this.handleSelect}
            getCrawl={this.getCrawl}
            bars={this.state.bars}
          />

        </div>
      </main>
    )
  }
}

export default CrawlNew


// handleSubmit(e) {
//   e.preventDefault()
//   axios
//     .post('/api/crawls', this.state.data,
//       { headers: {Authorization: `Bearer ${Auth.getToken()}`}})
//     .then(() => this.props.history.push('/crawls'))
//     .catch(err => alert(err.message))
// }

// handleSubmit(e) {
//   e.preventDefault()
//   axios
//     .post('/api/crawls', this.state.data,
//       { headers: {Authorization: `Bearer ${Auth.getToken()}`}})
//     .then(() => this.props.history.push(`/crawls/${this.props.match.params.id}`))
//     .catch(err => alert(err.message))
// }
