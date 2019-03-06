import React from 'react'
import axios from 'axios'

import BarCard from './BarCard.js'

// import SearchBar from '../common/SearchBar'

class BarIndex extends React.Component{
  constructor(){
    super()

    this.state={
      bars: [],
      crawls: []
    }

    // this.handleSearchChange = this.handleSearchChange.bind(this)
    // this.filterResults = this.filterResults.bind(this)
    // this.handleSearchSubmit = this.handleSearchSubmit.bind(this)
  }

  componentDidMount() {
    axios.get('/api/bars')
      .then(res => this.setState({ bars: res.data }))
    axios.get('/api/crawls')
      .then(res => this.setState({ crawls: res.data }))
  }


  // handleSearchChange({ target: { value, name }}){
  //   this.setState({ [name]: value })
  //   // console.log(this.state.search)
  //   this.filterResults()
  // }
  //
  // filterResults() {
  //   let bars = this.state.bars
  //   const search = this.state.search
  //   console.log(bars)
  //   bars = bars.filter(bar => {
  //     console.log(bar)
  //     return bar.name.includes(search)
  //   })
  //   console.log(bars)
  //   this.setState({
  //     ...this.state, bars: bars
  //   })
  // }



  render(){
    if(!this.state.bars) return null
    if(!this.state.crawls) return null

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

// put this back in when works
// <SearchBar
//   handleSearchChange={this.handleSearchChange}
//   search={this.state.search}
// />
