import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import BarCard from '../bars/BarCard.js'
import BarsShow from '../bars/BarsShow.js'


class CrawlsBarIndex extends React.Component {
  constructor(props) {
    super(props)

    this.state={}

  }

  componentDidMount() {
    axios.get('/api/bars')
      .then(res => this.setState({ bars: res.data }))
    axios.get(`/api/crawls/${this.props.match.params.id}`)
      .then(res => this.setState({ crawl: res.data }))
  }


  render(){
    if (!this.state.bars) return null
    if (!this.state.crawl) return null
    console.log('BARS', this.state.bars)
    console.log('CRAWLS', this.state.crawl)

    return(
      <main>
        <h1 className="title is-3 center">Add a bar</h1>

        <div className="columns is-multiline">
          {this.state.bars.map(bar =>
            <div className="column is-full-width" key={bar.id}>
              <Link to={`/crawls/${this.props.match.params.id}/bars/${bar.id}`}>
                <div className='container if-fullhd flex'> {/* is full hd for weird horizontals */}
                  <figure className="image" style={{ backgroundImage: `url(${bar.hero})`}} />
                  <div className="text-overlay">{name}</div>
                </div>
              </Link>
            </div>
          )}
        </div>
      </main>
    )
  }
}

export default CrawlsBarIndex
