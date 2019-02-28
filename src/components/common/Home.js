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
          {this.state.crawls.map(crawl => <div key={crawl._id}> <h1>  </h1>
            {crawl.stops.map(stop => <div key={stop._id}>
              <section className="hero">
                <div className="hero-body">
                  <div className="container">
                    <div className="columns is-centered">
                      <div className="column is-two-thirds">
                        <div className="header-crawl">
                          <h1 className="title is-2">{crawl.name}</h1>
                        </div>
                        <img src={stop.bar.hero}/>
                      </div>
                    </div>

                  </div>
                </div>
              </section>
              {/*
          <h1>{stop.bar.name}</h1>
          <p>{stop.bar.address}</p>
          <p>{stop.bar.description}</p>
          */}
            </div>)} </div>)}
        </div>
      </main>

    )
  }
}

export default Home
