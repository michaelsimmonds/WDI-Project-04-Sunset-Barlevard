import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import CrawlCard from '../crawls/CrawlCard.js'
import Select from 'react-select'

class Home extends React.Component{
  constructor(){
    super()

    this.state={
      crawls: [],
      location: []
    }

  }

  componentDidMount() {
    axios.get('/api/crawls')
      .then(res => this.setState({ crawls: res.data }))
  }

  render(){
    console.log(this.state.crawls)
    const { stops } = this.state.crawls
    return(
      <main>
        <section className="hero is-large background">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title sunset level-item">
                Sunset Barlevard
              </h1>
              <hr className="thin">
              </hr>
            </div>
          </div>
        </section>
        <form className="form">
          <Select
            className="select-bar"
            isMulti
            // options={stops.map(stop => {
            //   return { value: stop.bar.location, label: stop.bar.location }
            // })
            // }
            name="location"
          />
        </form>
        {this.state.crawls.map(crawl => <div key={crawl.id} className="hero-body">
          <CrawlCard {...crawl} />
        </div>
        )}
      </main>

    )
  }
}

export default Home
// <div className="crawls">
// <h1 className="title is-2 center" >Bar Crawls</h1>
// <div className="center">
//
// <div className="columns is-centered flex-direction">
// {this.state.crawls.map(crawl => <div key={crawl._id} className="column">
// </div>)}
// </div>
// </div>
// </div>
