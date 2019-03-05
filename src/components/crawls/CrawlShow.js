import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import CrawlMap from './CrawlMap'
import CrawlSlider from './CrawlSlider'
import Auth from '../../lib/Auth'

import mapboxgl from '../../lib/mapbox-gl'

class CrawlShow extends React.Component {
  constructor() {
    super()

    this.state = {}

    this.deleteCrawl = this.deleteCrawl.bind(this)

  }

  componentDidMount() {
    axios.get(`/api/crawls/${this.props.match.params.id}`)
      .then(res => {
        const bounds = new mapboxgl.LngLatBounds()

        res.data.stops.forEach(stop => {
          const { lng, lat } = stop.bar
          bounds.extend([lng, lat])
        })

        console.log('GETCENTER', bounds.getCenter())
        this.setState({ crawl: res.data, zoomCenter: bounds.getCenter() })
      })
  }

  deleteCrawl(){
    axios.delete(`/api/crawls/${this.props.match.params.id}`)
      .then(() => this.props.history.push('/crawls'))
      .catch(err => alert(err.message))
  }

  render(){
    if (!this.state.crawl) return null
    //console.log(this.state.crawl)
    const {
      comments,
      creator,
      description,
      name

    } = this.state.crawl
    return(
      <main>
        <section className="section">
          <div className="container">
            <h1 className="title is-2">{name}</h1>
            <article className="level">

              <div className="image-username">
                <Link to={`/users/${creator.id}`}>
                  <div style={{backgroundImage: `url(${creator.image})`}}className="user-image-home"/>
                </Link>


                <div className="content">
                  <strong>By {creator.username}</strong>
                </div>
                {description}

              </div>
            </article>
          </div>
        </section>
        <CrawlMap
          stops={this.state.crawl.stops}
          center={this.state.zoomCenter}
          zoom={12.0}
        />
        <div className="container">
          <section className="section">
            <h2 className="title is-4 center">Bars on this crawl</h2>
            <CrawlSlider
              stops = {this.state.crawl.stops}
            />
          </section>
        </div>
        <div className="container">
          <section className="section">
            <h2 className="title is-4 center">Comments</h2>
            <div className="card-content">
              {comments.map(comment => {
                console.log('COMMENT AUTHOR', comment.author)
                return(
                  <div className="box" key={comment.id}>
                    <article className="media>">
                      <div className="media-left">
                      </div>
                      <p><strong>{comment.author}</strong></p>
                      <p>{comment.content}</p>

                    </article>
                  </div>
                )
              })}
            </div>
          </section>
        </div>


        {Auth.isAuthenticated() && (creator.id === Auth.getUserID()) &&

        <form onSubmit={this.deleteCrawl}>
          <button className="button">Delete Crawl</button>
        </form>
        }
      </main>
    )
  }
}

export default CrawlShow
