import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import CrawlCard from '../crawls/CrawlCard.js'
import Select from 'react-select'
// import Switch from 'react-toggle-switch'
// import {render} from 'react-dom'

class Home extends React.Component{
  constructor(){
    super()

    this.state={
      crawls: [],
      location: [],
      switched: false
    }

    this.toggleSwitch = this.toggleSwitch.bind(this)

  }

  // get crawls with terraces
  // map over each Crawl
  // map over each bar in the crawl
  // if a bar has terrace boolean true add 1 to counter
  // at end if counter divided by bars.length is more than 0.5 the crawl is sun suitable
  getSun() {
    console.log(this.state.switched)
    this.state.crawls.map(crawl => {
      let counter = 0
      console.log(crawl)
      crawl.stops.forEach(stop => {
        console.log(stop)
        if (stop.bar.terrace === true) counter++
      })
      console.log(counter)
      if ((counter / crawl.stops.length) > 0.5) console.log('sun suitable')
      else console.log('not sun suitable')
    })

  }

  toggleSwitch() {
    this.getSun()
    this.setState({
      switched: !this.state.switched
    })
  }

  componentDidMount() {
    axios.get('/api/crawls')
      .then(res => this.setState({ crawls: res.data }))
  }



  render(){
    // console.log(this.state.crawls)
    const { stops } = this.state.crawls
    return(
      <main>
        <section className="hero is-large background">
          <button onClick={this.toggleSwitch}>Sunshine Mode</button>
          {this.state.switched && 'test'}
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
