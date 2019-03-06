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

    this.handleChange = this.handleChange.bind(this)

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
      console.log(hero)
    } else {
      this.setState({ sunSuitable: []})
      hero.classList.remove('background-toggle')
    }
    this.setState({ switched: !this.state.switched })
  }

  componentDidMount() {
    axios.get('/api/crawls')
      .then(res => this.setState({ crawls: res.data }))
    axios.get(`/api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ userData: res.data }))
  }

  handleChange(e) {
    const location = (e.map(location => location.value))
    const data = { location }
    this.setState({ data })
  }

  render(){
    console.log(this.state.location)
    console.log(this.state.userData)
    return(
      <main>
        <section className="hero is-large background">

          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="sunset level-item">
                Sunset Barlevard
              </h1>

              {this.state.switched ?
                <h1 className='disp-mode'>You're in Sunshine Mode! We're now showing Sun Friendly crawls</h1> :
                <h1 className='disp-mode'>Sun out?? Try clicking the sun...</h1>
              }

              <button className="sun-button" onClick={this.toggleSwitch}></button>

            </div>
          </div>
        </section>


        {!this.state.switched ?
          this.state.crawls.map(crawl =>
            <div key={crawl.id} className="hero-body">
              <CrawlCard {...crawl} />
            </div>
          )

          :
          this.state.sunSuitable.map(crawl => <div key={crawl.id} className="hero-body">
            <CrawlCard {...crawl} />
          </div>
          )
        }
      </main>
    )
  }
}

export default Home
