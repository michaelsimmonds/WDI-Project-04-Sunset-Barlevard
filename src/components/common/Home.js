import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import CrawlCard from '../crawls/CrawlCard.js'

let sunSuitableArr = []

class Home extends React.Component{
  constructor(){
    super()

    this.state={
      crawls: [],
      data: {
        location: []
      },
      barLocation: [],
      switched: false,
      sunSuitable: [],
      north: []
    }

    this.toggleSwitch = this.toggleSwitch.bind(this)

  }

  getSun() {
    this.state.crawls.map(crawl => {
      let counter = 0
      crawl.stops.forEach(stop => {
        if (stop.bar.terrace === true) counter++
      })
      if ((counter / crawl.stops.length) >= 0.5) {
        sunSuitableArr.push(crawl)
      }
    })
    this.setState({ sunSuitable: sunSuitableArr})
    sunSuitableArr = []
  }

  toggleSwitch() {
    const hero = document.querySelector('.hero')
    if (this.state.switched === false) {
      this.getSun()
      hero.classList.add('background-toggle')
    } else {
      this.setState({ sunSuitable: []})
      hero.classList.remove('background-toggle')
    }
    this.setState({ switched: !this.state.switched })
  }

  componentDidMount() {
    axios.get('/api/crawls')
      .then(res => this.setState({ crawls: res.data }))
  }

  render(){
    return(
      <main>
        <section className="hero is-medium background">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="sunset level-item">
                Sunset Barlevard
              </h1>
              <p className=" subtitle">Find and share bar crawls through London</p>
              {this.state.switched ?
                <h1 className='disp-mode title1 title is-6 '>You&apos;re in Sunshine Mode! Showing crawls with sunny spaces</h1> :
                <h1 className='disp-mode title1 title is-6'>Sun out? Toggle sunshine mode below</h1>
              }
              <button className="sun-button" onClick={this.toggleSwitch}></button>

            </div>
          </div>
        </section>
        {!this.state.switched ?
          this.state.crawls.map(crawl =>
            <div key={crawl.id} className="hero-body slider-section">
              <CrawlCard {...crawl} />
            </div>
          )

          :
          this.state.sunSuitable.map(crawl => <div key={crawl.id} className="hero-body slider-section">
            <CrawlCard {...crawl} />
          </div>
          )
        }
      </main>
    )
  }
}

export default Home
