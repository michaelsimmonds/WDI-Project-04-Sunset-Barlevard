import React from 'react'
//import { Link } from 'react-router-dom'
import axios from 'axios'
import CrawlMap from './CrawlMap'

class CrawlShow extends React.Component {
  constructor() {
    super()

    this.state={

    }

    //binds here
  }

  componentDidMount() {
    axios.get(`/api/crawls/${this.props.match.params.id}`)
      .then(res => {
        this.setState({ crawl: res.data })
      })
  }

  render(){
    if (!this.state.crawl) return null
    console.log(this.state.crawl)
    const {
      comments,
      creator,
      description,
      id,
      name
    } = this.state.crawl
    return(
      <main>
        <CrawlMap
          stops = {this.state.crawl.stops}
          center={{ lat: 51.5, lng: -0.05}}
          zoom={10.7}
        />

        <section className="section">
          <div className="container">
            <h1 className="title is-2">{name}</h1>
            <div>{description}</div>
            <div><strong>By {creator.username}</strong></div>
            <div className="card-content">
              {comments.map(comment => {
                return(
                  <div key={comment._id}>
                    <p><strong>{comment.author}</strong></p>
                    <p>{comment.content}</p>
                  </div>
                )
              })}
            </div>

          </div>
        </section>
      </main>
    )
  }
}

export default CrawlShow
