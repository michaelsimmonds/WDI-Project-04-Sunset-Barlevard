import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import CrawlSlider from './CrawlSlider'

const CrawlCard = ({ name, stops, id, creator, description, createdAt }) => {
  return(
    <div>
      <div className="header-crawl">
        <Link to={`/crawls/${id}`}>
          <h1 className="title is-2">{name}</h1>
        </Link>
      </div>
      <div className="header-crawl">
      </div>
      <div className="uploaded-user">
        <h1 className="title is-6 inline">Created by:</h1>
        <div className="image-username">
          <Link to={`/users/${creator.id}`}>
            <div style={{backgroundImage: `url(${creator.image})`}}className="user-image-home"/>
          </Link>
        </div>
      </div>

      <CrawlSlider
        stops = {stops}
      />

      <h1 className='title is-6 center'>Uploaded: {moment(createdAt).format('MMMM Do YYYY, h:mm:ss a')} </h1>
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
