import React from 'react'
import axios from 'axios'

import Auth from '../../lib/Auth'


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
            <div style={{backgroundImage: `url(${this.state.userData.image})`}}className="user-image"/>
            <h1 className="title is-2"> @{this.state.userData.username} </h1>
            <h1 className="title is-4">Bio</h1>
            <div className="container">
              <p className="is-medium margin"> {this.state.userData.bio} </p>
            </div>
            <h1 className="title is-4">Created Crawls</h1>
            {this.state.userData.created_crawls.map(crawl => <div key={crawl._id}> {crawl.name} </div>)}
          </div>
        </section>
      </main>
    )
  }

}
export default UserShow
