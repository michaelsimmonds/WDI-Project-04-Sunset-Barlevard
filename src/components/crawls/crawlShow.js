import React from 'react'
//import { Link } from 'react-router-dom'
import axios from 'axios'
import CrawlMap from './CrawlMap'
import CrawlSlider from './CrawlSlider'

class CrawlShow extends React.Component {
  constructor() {
    super()

    this.state={
      zoomCenter: [-0.1293555, 51.546483]
    }
    //binds here
  }

  componentDidMount() {
    axios.get(`/api/crawls/${this.props.match.params.id}`)
      .then(res => {
        this.setState({ crawl: res.data })
        const stops = this.state.crawl.stops
        console.log("stops: " + stops)
        return stops
      })
      .then(stops => {
        //map over each stop and return just the lngs
        const lngs = stops.map(stop => stop.bar.lng)
        console.log('LNGS', lngs)
        //map over each stop and return just the lats
        const lats = stops.map(stop => stop.bar.lat)
        console.log('LATS', lats)
        //reduce the lngs and divide by lngs.length
        const avLng = lngs.reduce((total, lng) => total + lng, 0) / lngs.length
        //reduce the lats and divide by lats.length
        const avLat = lats.reduce((total, lat) => total + lat, 0) / lats.length

        this.setState({zoomCenter: {lng: avLng, lat: avLat}})
        console.log('ZOOMCENTER', this.state.zoomCenter)
      })
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
        <CrawlMap
          stops = {this.state.crawl.stops}
          center = {this.state.zoomCenter}
          zoom={12.0}
        />

        <CrawlSlider
          stops = {this.state.crawl.stops}
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
