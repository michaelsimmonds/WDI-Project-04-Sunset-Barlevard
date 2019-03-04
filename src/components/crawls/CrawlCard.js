import React from 'react'
import { Link } from 'react-router-dom'
import HoverImage from 'react-hover-image'


const CrawlCard = ({ name, stops, id, creator, date, description }) => {
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
          <Link to={`/users/${creator.id}`}>
            <div style={{backgroundImage: `url(${creator.image})`}}className="user-image-home"/>
          </Link>
        </div>
      </div>
      <div className="center">
        <div className="columns slider">
          {stops.map(stop => <div className="column is-centered is-full" key={stop._id}>
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
      <div className="description">
        <h1 className="title description-title is-6">{description}</h1>
      </div>
      <form className="header-crawl">
        <button className="header-crawl button upvote">Bookmark</button>
      </form>
    </div>

  )
}

export default CrawlCard
