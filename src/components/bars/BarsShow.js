import React from 'react'
import axios from 'axios'

import BarMap from './BarMap'

class BarsShow extends React.Component{

  constructor() {
    super()

    this.state = {}

  }

  componentDidMount() {
    axios.get(`/api/bars/${this.props.match.params.id}`)
      .then(res => this.setState({ bar: res.data }))
  }

  render() {

    if(!this.state.bar) return null
    const { name, hero, description, address, lat, lng } = this.state.bar
    return(
      <section className='tinted bar-show-img' style={{ backgroundImage: `url(${hero})`}} >

        <div className="container">

          <div className='columns'>

            <div className='column is-half has-text-white bar-show-column' id='show'>
              <h1 className="title has-text-white bar-show-title">{name}</h1>
              <div className='bar-show-div'>{address}</div>
              <div className='bar-show-div des has-text-white'>{description}</div>
            </div>

            <div className='column is-half align-items bar-show-column'>
              <BarMap
                center={{ lat, lng }}
                zoom={11.5}
                marker={this.state.bar}
              />
            </div>

          </div>

        </div>
      </section>
    )
  }
}

export default BarsShow
