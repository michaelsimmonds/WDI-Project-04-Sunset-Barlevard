import React from 'react'
import axios from 'axios'
import Promise from 'bluebird'
import { Link } from 'react-router-dom'

import BarMap from './BarMap'

class BarsShow extends React.Component{

  constructor(props) {
    super(props)

    this.state = {
      crawls: []
    }

  }

  componentDidMount() {

    Promise.props({
      bar: axios.get(`/api/bars/${this.props.match.params.id}`).then(res => res.data),
      crawls: axios.get('/api/crawls').then(res => res.data)
    })
      .then(data => this.setState({ bar: data.bar, crawls: data.crawls }))
  }

  handleChange({ target: { name, value }}) {
    const data = {...this.state.data, [name]: value}
    this.setState({ data })
  }

  handleSubmit(e, crawlId) {
    e.preventDefault()
    axios.post(`/api/crawls/${crawlId}/bars/${this.props.match.params.id}/add`), this.state.data
  }

  getRelavantCrawls() {
    return this.state.crawls.filter(crawl => {
      const barIds = crawl.stops.map(stop => stop.bar.id)
      console.log(barIds)
      return barIds.includes(this.state.bar.id)
    })
  }

  render() {
    console.log(this.state.crawls)
    console.log(this.state.bar)
    if(!this.state.bar || !this.state.crawls) return null
    const { name, hero, description, address, lat, lng } = this.state.bar
    const crawls = this.getRelavantCrawls()
    return(
      <section className='tinted bar-show-img' style={{ backgroundImage: `url(${hero})`}} >

        <div className="container">

          <div className='columns'>

            <div className='column is-half has-text-white bar-show-column' id='show'>
              <h1 className="title has-text-white bar-show-title">{name}</h1>
              <div className='bar-show-div add'>{address}</div>
              <div className='bar-show-div has-text-white'>{description}</div>
              <div className='bar-show-div has-text-white'>
                <h1 className="title has-text-white bar-show-title">Crawls added to:</h1>

                {crawls.length > 0 ? (
                  crawls.map(crawl => <div key={crawl.id} className="title1"><h1> <Link to={`/crawls/${crawl.id}`}> {crawl.name} </Link>  </h1> </div> )
                ) : (
                  <h1 className="title"> Has not been added on any crawls </h1>
                )}
              </div>
            </div>
            <div>


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

// {this.state.crawls.map(crawl =>
//   crawl.stops.map(stop =>
//     stop.bar.map(bar =>
//       bar.id === id ?
//         <h1 className="title">{crawl.name}</h1>
//         :
//         <h1 className="title"> has not been featured on any crawls </h1>
//     ))
// )}
