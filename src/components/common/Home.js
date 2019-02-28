import React from 'react'
import axios from 'axios'

class Home extends React.Component{
  constructor(){
    super()

    this.state={
      crawls: []
    }

  }

  componentDidMount() {
    axios.get('/api/crawls')
      .then(res => this.setState({ crawls: res.data }))
  }

  render(){
    console.log(this.state.crawls)
    return(
      <main>
        <section className="hero is-black is-large">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                Sunset Barlevard
              </h1>
              <h2 className="subtitle">
              </h2>
            </div>
          </div>
        </section>
        <div>
          {this.state.crawls.map(crawl => <div key={crawl._id}>
            <div className="header-crawl">
              <h1 className="title is-2">{crawl.name}</h1>
            </div>
            <div className="center">
              <div className="columns is-multitude slider">
                {crawl.stops.map(stop => <div className="column is-centered is-full center" key={stop._id}>
                  <div style={{backgroundImage: `url(${stop.bar.hero})`}}className="carousel"/>
                </div>)}
              </div>
            </div>
          </div>)}

        </div>
      </main>

    )
  }
}

export default Home
