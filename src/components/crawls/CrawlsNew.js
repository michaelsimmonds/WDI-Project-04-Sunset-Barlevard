import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'
import CrawlForm from './CrawlForm'
import BarsNew from '../bars/BarsNew.js'

class CrawlsNew extends React.Component{
  constructor(){
    super()

    this.state = {
      bars: [],
      data: {
        name: '',
        description: '',
        date: '',
        stops: []
      },
      isHidden: true

    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleAddStop = this.handleAddStop.bind(this)

    this.toggleHidden = this.toggleHidden.bind(this)

  }
  componentDidMount() {
    axios.get('/api/bars')
      .then(res => this.setState({ bars: res.data }))
  }

  handleChange({ target: { name, value }}) {
    const data = {...this.state.data, [name]: value}
    this.setState({ data })
  }

  handleAddStop(selectedStops) {
    const stops = selectedStops.map((stop, index) => {
      return { bar: stop.value, order: index }
    })

    const data = { ...this.state.data, stops }
    this.setState({ data })
  }

  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
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
      <main className="crawl-form">
        <section className="section section-height-crawl">
          <div className="container">
            <CrawlForm
              data={this.state.data}
              handleAddStop={this.handleAddStop}
              handleChange={this.handleChange}
              handleFormChange={this.handleFormChange}
              handleSubmit={this.handleSubmit}
              handleSelect={this.handleSelect}
              getCrawl={this.getCrawl}
              bars={this.state.bars}
              toggle={this.toggleHidden}
            />
          </div>
        </section>
      </main>
    )
  }
}

export default CrawlsNew

// <div className="column is-5">
// <button onClick={this.toggleHidden} className="button button-styled">{this.state.isHidden ? 'Add a Bar' : 'Submit' }</button>
// </div>
// {!this.state.isHidden && <BarsNew />}

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
