import React from 'react'
import axios from 'axios'
import mapboxgl from 'mapbox-gl'

import BarMap from './BarMap'

class BarsShow extends React.Component{

  constructor() {
    super()

    this.state = {}

  }

  componentDidMount() {
    axios.get(`/api/bars/${this.props.match.params.id}`)
      .then(res => this.setState({ bars: res.data }))
  }


  render() {

    if(!this.state.bars) return null
    console.log(this.state.bars)
    console.log(this.props)
    const { name, hero, description, address } = this.state.bars
    return(
      <section className='tinted bar-show-img' style={{ backgroundImage: `url(${hero})`}} >

        <div className="container">

          <div className='columns'>

            <div className='column is-half has-text-white bar-show-column' id='show'>
              <h1 className="title has-text-white">{name}</h1>
              <div className='bar-show-div'>{description}</div>
              <div className='bar-show-div'>{address}</div>
            </div>

            <div className='column is-half align-items bar-show-column'>
              <BarMap
                center={{ lat: this.state.bars.lat, lng: this.state.bars.lng }}
                zoom={11.5}
                marker={this.state.bars}
              />
            </div>

          </div>

        </div>
      </section>
    )
  }
}

export default BarsShow
