import React from 'react'
import { Link } from 'react-router-dom'

const CrawlSlider = ({ stops }) => {
  //const images = stops.map(stop => stop.bar.hero)
  console.log(stops)
  return(
    <section className="crawl-display">
      <div className="columns slider">
        {stops.map(stop => <div key={stop._id}>
          <h3>{stop.bar.name} | {stop.bar.address}</h3>
          <div
            Link to={`bars/${stop._id}`}
            style={{backgroundImage: `url(${stop.bar.hero})`}}
            className="slider-carousel" />
        </div>)}
      </div>





      <div className="items">
        {stops.map(stop => <div key={stop._id}>
          <div href={`bars/${stop._id}`} style={{backgroundImage: `url(${stop.bar.hero})`}}className="item"/>

        </div>)}
      </div>
    </section>
  )
}

export default CrawlSlider
