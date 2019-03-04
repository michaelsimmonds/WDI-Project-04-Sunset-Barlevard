import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class UserShow extends React.Component{
  constructor(props){
    super(props)

    this.state={
      imageSuccess: false,
      postData: {
        bio: ''
      },
      errors: {}
    }
  }

  componentDidMount(){
    axios.get(`/api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ userData: res.data }))
  }

  render(){
    if(!this.state.userData) return null
    console.log(this.state.userData)
    return(
      <main>
        <section className="section">
          <div className="container">
            <div className="center">
              <div style={{backgroundImage: `url(${this.state.userData.image})`}}className="user-image"/>
            </div>
            <h1 className="title is-2 center"> @{this.state.userData.username} </h1>
            <h1 className="title is-4 center">Bio</h1>
            <div className="container">
              <p className="is-medium margin center"> {this.state.userData.bio} </p>
            </div>
            {this.state.userData.created_crawls.length >= 1 ? <h1 className="title is-4 center">Created Crawls</h1> : '' }
            <div className="columns is-multiline is-centered">
              {this.state.userData.created_crawls.map(crawl => <div className="column is-one-fifth small-margin" key={crawl._id}> <h1 className="title is-6 center">{crawl.name}</h1>
                <div style={{backgroundImage: `url(${crawl.stops[0].bar.hero})`}}className="created-crawls center"/>
              </div>)}
            </div>
            {this.state.userData.created_crawls.length === 0 ?
              <div> <h1 className="title is-2 center"> No crawls yet 😔 </h1>
                <Link to={'/crawls/new'} className="center"> <button className="center button"> Add my first crawl </button> </Link>
              </div>: ''}
          </div>
        </section>
      </main>
    )
  }
}

export default UserShow
