import React from 'react'
import { Link } from 'react-router-dom'

const CrawlSlider = ({ stops }) => {
  //const images = stops.map(stop => stop.bar.hero)
  console.log(stops)
  return(
    <section className="crawl-display">
    
      <div className="columns full-slider">
        {stops.map(stop => <div key={stop.id}>
          <Link to={`bars/${stop.id}`}>
            <div
              style={{backgroundImage: `url(${stop.bar.hero})`}}
              className="slider-image" />
            <div className="slider-captions is-primary"><h3 className="title is-5 is-warning center">{stop.bar.name} | {stop.bar.address}</h3></div>
          </Link>
        </div>)}
      </div>


    </section>
  )
}

export default CrawlSlider
