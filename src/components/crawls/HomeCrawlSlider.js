import React from 'react'

const HomeCrawlSlider = ({ stops }) => {
  return(
    <main>
      <div className="center">
        <div className="columns slider">
          {stops.map(stop => <div className="column is-centered is-full column-container" key={stop.id}>
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
          </div>)}
        </div>
      </div>
    </main>
  )
}

export default HomeCrawlSlider
