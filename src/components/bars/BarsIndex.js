import React from 'react'
import axios from 'axios'
import BarCard from './BarCard.js'


class BarIndex extends React.Component{
  constructor(){
    super()

    this.state={
      bars: []
    }

  }

  componentDidMount() {
    axios.get('/api/bars')
      .then(res => this.setState({ bars: res.data }))
  }

  render(){

    if(!this.state.bars) return null
    console.log(this.state.bars)
    return(

      <section className="section">
        <h2 className="title is-1 has-text-centered">Discover our Bars and Pubs</h2>
        <div className="is-full-width">
          <hr />
          <h1 className="title is-2 has-text-centered">East London</h1>
          <div className="columns is-multiline">
            {this.state.bars.map(bar =>
              <div className="column is-full-width" key={bar.id}>
                <BarCard {...bar} />
              </div>
            )}
          </div>

        </div>
      </section>
    )
  }
}

export default BarIndex
