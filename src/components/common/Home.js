import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


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
        <section className="hero is-large">
          <div className="hero-body">
            <div className="container">
              <h1 className="title level-item">
                Sunset Barlevard
              </h1>
              <h2 className="subtitle">
              </h2>
            </div>
          </div>
        </section>
        <div className="crawls">
          <h1 className="title is-2 center" >Bar Crawls</h1>
          <div className="columns is-multiline center">

            {this.state.crawls.map(crawl => <div key={crawl._id} className="column is-one-fifth margin1">
              <div className="flex-direction2">
                <h1 className="title is-6">{crawl.name}</h1>
                <div style={{backgroundImage: `url(${crawl.creator.image})`}}className="user-image-home"/>
              </div>
              <p>@{crawl.creator.username}</p>

              <div className="columns slider">
                {crawl.stops.map(stop => <div className="column is-centered is-full center" key={stop._id}>
                  <div style={{backgroundImage: `url(${stop.bar.hero})`}}className="carousel"/>
                </div>)}
              </div>
            </div>)}

          </div>
        </div>

      </main>

    )
  }
}

export default Home
