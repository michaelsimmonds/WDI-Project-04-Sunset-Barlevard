import React from 'react'
import axios from 'axios'
import Select from 'react-select'


import BarCard from './BarCard.js'


const options = [
  { value: 'jujus', label: 'Jujus' },
  { value: 'theculpeper', label: 'The Culpeper' }
]

class BarIndex extends React.Component{
  constructor(){
    super()

    this.state={
      bars: [],
      data: []
    }

    this.handleChange = this.handleChange.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSelect = this.handleSelect.bind(this)

  }

  componentDidMount() {
    axios.get('/api/bars')
      .then(res => this.setState({ bars: res.data }))
  }

  handleChange(data) {
    this.setState({ data })
    console.log('Option selected:', data)
  }

  // handleSubmit(e) {
  //   e.preventDefault()
  //   axios
  //     .post('/api/crawls', this.state.data
  //     )
  //     .then(() => {
  //       this.props.history.push('/crawls')
  //     })
  // }

  handleSelect(e){
    const listOfBars = (e.map(select => select.value))
    const data = { ...this.state.data, listOfBars }
    this.setState({ data })
  }

  render(){
    console.log(this.state.bars)
    const { data } = this.state
    if(!this.state.bars) return null
    return(
      <section className="section">
        <h2 className="title is-1 has-text-centered">Discover our Bars and Pubs</h2>
        <Select
          value={data}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          onSelect={this.handleSelect}
          options={options}
          isMulti
        />
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
