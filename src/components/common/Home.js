import React from 'react'
import axios from 'axios'

class Home extends React.Component{
  constructor(){
    super()

    this.state={}

  }

  componentDidMount() {
    axios.get('/api/crawls')
      .then(res => this.setState({ crawls: res.data }))
  }

  render(){
    console.log(this.state.crawls)
    return(
      <div>
        <h1>Hello World!</h1>
      </div>
    )
  }
}

export default Home
