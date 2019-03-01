import React from 'react'
//import { Link } from 'react-router-dom'
import axios from 'axios'

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
      name,
      stops
    } = this.state.crawl
    return(
      <main>
        <h1>{name}</h1>
        <div>{description}</div>
        <div>{creator}</div>
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
      </main>
    )
  }
}

export default CrawlShow
