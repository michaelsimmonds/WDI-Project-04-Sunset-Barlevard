import React from 'react'
// import axios from 'axios'
// import Auth from '../../lib/Auth'
import CrawlForm from './CrawlForm'


class CrawlNew extends React.Component{
  constructor(){
    super()

    this.state = {
      data: {
        name: '',
        description: ''
      }
    }

    // this.handleSubmit = this.handleSubmit.bind(this)

  }

  // handleSubmit(e) {
  //   e.preventDefault()
  //   axios
  //     .post('/api/crawls', this.state.data,
  //       { headers: {Authorization: `Bearer ${Auth.getToken()}`}})
  //     .then(() => this.props.history.push('/crawls'))
  //     .catch(err => alert(err.message))
  // }

  render() {
    return (
      <main className="section">
        <div className="container">
          <CrawlForm
            data={this.state.data}
            // handleChange={this.handleChange}
            // handleSubmit={this.handleSubmit}
            // suggestionSelect={this.suggestionSelect}
          />
        </div>
      </main>
    )
  }
}

export default CrawlNew
