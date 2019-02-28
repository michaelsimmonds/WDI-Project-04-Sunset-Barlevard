import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

class App extends React.Component{
  constructor(){
    super()

    this.state={}

  }

  componentDidMount() {
    axios.get('/api/bars')
      .then(res => this.setState({ bars: res.data }))
  }

  render(){
    console.log(this.state.bars)
    return(
      <div>
        <h1>Hello World!</h1>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
