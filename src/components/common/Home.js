import React from 'react'
import axios from 'axios'

class Home extends React.Component{
  constructor(){
    super()

    this.state={}

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
      </main>

    )
  }
}

export default Home
