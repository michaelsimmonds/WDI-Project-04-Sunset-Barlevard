import React from 'react'
import { Link } from 'react-router-dom'
import HoverImage from 'react-hover-image'

const CrawlSlider = ({ stops }) => {
  const images = stops.map(stop => stop.bar.hero)
  console.log(stops)
  return(
    <main>
      <div className="center">
        <div className="columns slider">
          {stops.map(stop => <div className="column is-centered is-full column-container" key={stop.id}>
            <Link to={`/bars/${stop.bar.id}`}>
              <div className="container2">
                <div className="content">
                  <div className="content-overlay"></div>
                  <div style={{backgroundImage: `url(${stop.bar.hero})`}}className="carousel"/>
                  <div className="content-details fadeIn-bottom">
                    <div className="title1">{stop.bar.name}</div>
                    <div className="subtitle2">📍{stop.bar.location} London</div>
                  </div>
                </div>
              </div>
            </Link>
          </div>)}
        </div>
      </div>
    </main>
  )
}

export default CrawlSlider
