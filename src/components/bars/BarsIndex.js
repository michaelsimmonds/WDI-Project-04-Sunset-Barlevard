import React from 'react'
import axios from 'axios'

import BarCard from './BarCard.js'

class BarIndex extends React.Component{
  constructor(){
    super()

    this.state={
      bars: [],
      crawls: []
    }
  }

  componentDidMount() {
    axios.get('/api/bars')
      .then(res => this.setState({ bars: res.data }))
    axios.get('/api/crawls')
      .then(res => this.setState({ crawls: res.data }))
  }

  // noOfBarsInCrawls() {
  //   this.state.crawls.map(crawl => crawl)
  //
  // }


  render(){
    if(!this.state.bars) return null
    if(!this.state.crawls) return null
    console.log(this.state.bars)
    console.log(this.state.crawls)

    const { crawls } = this.state
    const { bars } = this.state
    return(
      <main className="grey-background">
        <section className="section">
          <h2 className="title is-2 has-text-centered title-font">Discover our Bars and Pubs</h2>
          <div className="is-full-width">
            <hr />
            <h1 className="title is-3 has-text-centered title-font">East London</h1>
            <div className="columns is-multiline">
              {this.state.bars.map(bar =>
                <div className="column is-full-width" key={bar.id}>
                  <BarCard {...bar} />
                </div>
              )}
            </div>

          </div>
        </section>
      </main>
    )
  }
}

export default BarIndex
