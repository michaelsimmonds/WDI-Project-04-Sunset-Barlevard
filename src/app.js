import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/common/Home'
import Register from './components/Auth/Register'
import Login from './components/Auth/Login'
import Navbar from './components/common/Navbar'
import 'bulma'

class App extends React.Component{
  constructor(){
    super()
  }

  render(){
    return(
      <div>
        <BrowserRouter>
          <main>
            <Navbar />
            <Switch>
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
              <Route path="/" component={Home} />
            </Switch>
          </main>
        </BrowserRouter>
      </div>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
