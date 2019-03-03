import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import BarCard from '../bars/BarCard.js'


class CrawlsBarIndex extends React.Component {
  constructor() {
    super()

    this.state={}

  }

  componentDidMount() {
    axios.get('/api/bars')
      .then(res => this.setState({ bars: res.data }))
  }

  render(){
    if (!this.state.bars) return null
    console.log(this.state.bars)

    return(
      <main>
        <h1>CHOOSE A BAR</h1>

        <div className="columns is-multiline">
          {this.state.bars.map(bar =>
            <div className="column is-full-width" key={bar.id}>
              <BarCard {...bar} />
            </div>
          )}
        </div>
      </main>
    )
  }
}

export default CrawlsBarIndex
