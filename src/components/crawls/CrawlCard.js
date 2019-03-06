import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import HomeCrawlSlider from './HomeCrawlSlider'


const CrawlCard = ({ name, stops, id, creator, description, created_at }) => {
  return(
    <div>
      <hr/>
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
      <Link to={`/crawls/${id}`}>
        <HomeCrawlSlider
          stops = {stops}
        />
      </Link>

      <h1 className='title is-6 margin-top center'>Uploaded: {moment(created_at).format('MMMM Do YYYY')} </h1>
      <div className="description">
        <h1 className="title description-title is-6">{description}</h1>
      </div>
    </div>

  )
}

// <form onSubmit={(e) => handleSubmit(e, name)}className="header-crawl">
//   <button className="header-crawl button button-styled upvote">Favourite</button>
// </form>

export default CrawlCard
