import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import BarStopForm from './BarStopForm.js'
import Auth from '../../lib/Auth'

class BarsShow extends React.Component{

  constructor() {
    super()

    this.state = {
      stops: {
        order: ''
      }
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  componentDidMount() {
    axios.get(`/api/bars/${this.props.match.params.id}`)
      .then(res => this.setState({ bar: res.data }))
  }

  handleChange({ target: { name, value }}) {
    const data = {...this.state.data, [name]: value}
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.setState({ stops: this.state.bar })
  }

  render() {

    if(!this.state.bar) return null
    console.log('stops', this.state.stops)
    const { name, hero, description, address } = this.state.bar
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

        {/*===============================ADD STOP=================================================*/}

        <BarStopForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          stops={this.state.stops}
        />

      </section>
    )
  }
}

export default BarsShow
