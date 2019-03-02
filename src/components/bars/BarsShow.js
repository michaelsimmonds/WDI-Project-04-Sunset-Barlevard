import React from 'react'
import axios from 'axios'

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
    console.log(this.state)
    const { name, hero, description, address } = this.state.bars
    return(
      <section className='tinted bar-show-img' style={{ backgroundImage: `url(${hero})`}} >

        <div className="section">

          <div className='columns'>

            <div className='column is-half has-text-white' id='show'>
              <h1 className="title has-text-white">{name}</h1>
              <div className='bar-show-div'>{description}</div>
              <div className='bar-show-div'>{address}</div>
            </div>

          </div>





          {/*<div className='container is-fullhd flex'>
            <figure className="image is-5by3 tinted" />
            <div className="text-overlay">{name}</div>
            <div className="text-overlay">{description}</div>
          </div>*/}

        </div>
      </section>
    )
  }
}

export default BarsShow
