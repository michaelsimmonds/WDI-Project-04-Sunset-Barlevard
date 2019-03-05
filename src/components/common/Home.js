import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import CrawlCard from '../crawls/CrawlCard.js'
// import Select from 'react-select'
// import makeAnimated from 'react-select/lib/animated'

// const options = [
//   { value: 'north', label: 'North London' },
//   { value: 'east', label: 'East London' },
//   { value: 'south', label: 'South London' },
//   { value: 'west', label: 'West London' }
// ]

const sunSuitableArr = []

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
      if ((counter / crawl.stops.length) > 0.5) {
        sunSuitableArr.push(crawl)
      }
    })
    this.setState({ sunSuitable: sunSuitableArr})
  }

  toggleSwitch() {
    if (this.state.switched === false) this.getSun()
    else this.setState({ sunSuitable: []})
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
          <button onClick={this.toggleSwitch}>Sunshine Mode</button>
          {this.state.switched && 'SUNSHINE MODE ON'}
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="sunset level-item">
                Sunset Barlevard
              </h1>
              <h1 className="title is-6 subtitle-header">Find, Share and Enjoy Bar Crawls in London</h1>
              <hr className="thin">
              </hr>
            </div>
          </div>
        </section>
        {!this.state.switched ?
          this.state.crawls.map(crawl => <div key={crawl.id} className="hero-body">
            <CrawlCard {...crawl} />
          </div>
          ) :
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

// <form className="form">
//   <Select
//     className="select-bar"
//     isMulti
//     onChange={this.handleChange}
//     options={options}
//     name="location"
//     components={makeAnimated()}
//   />
// </form>
