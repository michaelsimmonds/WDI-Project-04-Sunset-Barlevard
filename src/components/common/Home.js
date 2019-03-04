import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import CrawlCard from '../crawls/CrawlCard.js'
import Select from 'react-select'
// import Switch from 'react-toggle-switch'
// import {render} from 'react-dom'


const sunSuitCrawls = []

class Home extends React.Component{
  constructor(){
    super()

    this.state={
      crawls: [],
      location: [],
      switched: false, //have no idea why this needs to start at true, doesnt work on first click if switched is defaulted true
      sunSuitable: []
    }

    this.toggleSwitch = this.toggleSwitch.bind(this)

  }

  getSun() {
    this.state.crawls.map(crawl => {
      let counter = 0
      // console.log(crawl)
      crawl.stops.forEach(stop => {
        // console.log(stop)
        if (stop.bar.terrace === true) counter++
      })
      // console.log(counter)
      if ((counter / crawl.stops.length) > 0.5) {
        // console.log('sun suitable')
        this.setState({ sunSuitable: crawl})
        sunSuitCrawls.push(crawl)
      } else {
        // console.log('not sun suitable')
      }
    })
    // console.log(sunSuitCrawls)
    // console.log(this.state.sunSuitable)
  }


  toggleSwitch() {
    this.setState({ switched: !this.state.switched })
    // console.log(this.state.switched)
    if (this.state.switched === true) {
      this.getSun()
    } else {
      this.setState({ sunSuitable: null})
    }
    // console.log(this.state.sunSuitable)
    // console.log(this.state)
  }



  componentDidMount() {
    axios.get('/api/crawls')
      .then(res => this.setState({ crawls: res.data }))
  }



  render(){
    // console.log(this.state.switched)
    // console.log(this.state.sunSuitable)
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
