import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import CrawlCard from '../crawls/CrawlCard.js'
import Select from 'react-select'
import makeAnimated from 'react-select/lib/animated'

const options = [
  { value: 'north', label: 'North London' },
  { value: 'east', label: 'East London' },
  { value: 'south', label: 'South London' },
  { value: 'west', label: 'West London' }
]

class Home extends React.Component{
  constructor(){
    super()

    this.state={
      crawls: [],
      data: {
        location: []
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.mapLocation = this.mapLocation.bind(this)

  }

  componentDidMount() {
    axios.get('/api/crawls')
      .then(res => this.setState({ crawls: res.data }))
  }

  handleChange(e) {
    const location = (e.map(location => location.value))
    const data = { location }
    this.setState({ data })
    console.log(location)
  }

  mapLocation(){
    this.state.crawls.map(crawl => {
      crawl.stops.forEach(stop => {
        console.log(stop.bar.location)
      })
    })
  }

  render(){
    return(
      <main>
        <section className="hero is-large background">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title sunset level-item">
                Sunset Barlevard
              </h1>
              <h1 className="title is-6 subtitle-header">Find Bar Crawls in London</h1>
              <hr className="thin">
              </hr>
            </div>
          </div>
        </section>
        <form className="form">
          <Select
            className="select-bar"
            isMulti
            onChange={this.handleChange}
            options={options}
            name="location"
            components={makeAnimated()}
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
