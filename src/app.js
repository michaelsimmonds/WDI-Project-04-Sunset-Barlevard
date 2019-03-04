import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/common/Home'
import Register from './components/Auth/Register'
import Login from './components/Auth/Login'
import Navbar from './components/common/Navbar'
import CrawlShow from './components/crawls/CrawlShow'
import BarsShow from './components/bars/BarsShow'
import CrawlsNew from './components/crawls/CrawlsNew'
import CrawlsBarIndex from './components/crawls/CrawlsBarIndex'
import UserShow from './components/Auth/UserShow'
import BarsIndex from './components/bars/BarsIndex'
import 'mapbox-gl/dist/mapbox-gl.css'
import BarsNew from './components/bars/BarsNew'
import './style.scss'
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
              <Route path="/bars/new" component={BarsNew} />
              <Route path="/bars/:id" component={BarsShow} />
              <Route path="/bars" component={BarsIndex} />
              <Route path="/crawls/:id/bars/:id/add" component={BarsShow} />
              <Route path="/crawls/:id/bars" component={CrawlsBarIndex} />
              <Route path="/crawls/new" component={CrawlsNew} />
              <Route path="/crawls/:id" component={CrawlShow} />
              <Route path="/users/:id" component={UserShow} />
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
