import React from 'react'
import axios from 'axios'
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
      userData: {
        favourites: []
      },
      barLocation: [],
      switched: false,
      sunSuitable: [],
      north: []
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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
    sunSuitableArr = []
  }

  toggleSwitch() {
    const hero = document.querySelector('.hero')
    // const sunDiv = document.querySelector('.sun-div')
    // const main = document.querySelector('main')
    if (this.state.switched === false) {
      this.getSun()
      hero.classList.add('background-toggle')
      // sunDiv.id = 'sun-div-clicked'
      // main.classList.add('main-sunset-mode')
      console.log(hero)
    } else {
      this.setState({ sunSuitable: []})
      hero.classList.remove('background-toggle')
      // sunDiv.id = ''
      // main.classList.remove('main-sunset-mode')
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

  handleSubmit(e, crawl) {
    e.preventDefault()
    const faves = []
    faves.push(crawl)
    this.setState({favourites: faves})
  }

  render(){
    console.log('favourites', this.state.favourites)
    console.log('user data', this.state.userData)
    return(
      <main>
        <section className="hero is-medium background">

          {/*
          {this.state.switched ?
            <section className='sun-div'>
              <div>You're in Sunshine Mode! We've displayed the bar crawls with great roof terraces and outside spaces</div>
            </section> :
            <section className='sun-div'>
              <div>Sun out?? Try clicking the sun below...</div>
            </section>
          }
          */}

          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="sunset level-item">
                Sunset Barlevard
              </h1>
              <p className=" title is-6 title1">Find and Share Crawls in London</p>
              {this.state.switched ?
                <h1 className='disp-mode title1 title is-6 '>You're in Sunshine Mode! Now showing Sun Friendly crawls</h1> :
                <h1 className='disp-mode title1 title is-6'>Sun out? Click the sun</h1>
              }

              <button className="sun-button" onClick={this.toggleSwitch}></button>






            </div>
          </div>
        </section>


        {!this.state.switched ?
          this.state.crawls.map(crawl => <div key={crawl.id} className="hero-body">
            <CrawlCard
              handleSubmit={this.handleSubmit}
              {...crawl} />
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
