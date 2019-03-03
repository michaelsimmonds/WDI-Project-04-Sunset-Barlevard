import React from 'react'
import { Link } from 'react-router-dom'
import HoverImage from 'react-hover-image'


const CrawlCard = ({ name, stops, id, creator, date }) => {
  return(
    <div>
      <div className="header-crawl">
        <Link to={`/crawls/${id}`}>
          <h1 className="title is-2">{name}</h1>
        </Link>
      </div>
      <div className="header-crawl">

        <h1 className="title is-6">{date}</h1>
      </div>
      <div className="uploaded-user">
        <h1 className="title is-6 inline">Created by:</h1>
        <div className="image-username">
          <div style={{backgroundImage: `url(${creator.image})`}}className="user-image-home"/>
        </div>
      </div>
      <div className="center">
        <div className="columns slider">

          {stops.map(stop => <div className="column is-centered is-full center" key={stop._id}>
            <div className="container2">
              <div className="content">
                <div className="content-overlay"></div>
                <div style={{backgroundImage: `url(${stop.bar.hero})`}}className="carousel"/>

                <div className="content-details fadeIn-bottom">
                  <div className="content-details1">{stop.bar.name}</div>
                  <div className="content-details2">- {stop.bar.description}</div>
                </div>
              </div>
            </div>
          </div>)}
        </div>
      </div>
    </div>

  )
}

export default CrawlCard
