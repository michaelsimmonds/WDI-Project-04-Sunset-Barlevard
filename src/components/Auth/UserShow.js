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
    // console.log(this.state.userData)
    return(
      <main className="grey-background section">
        <section className="view-port">
          <div className="container user-div">

            <input type="radio" id="pic" name="nav-tab" />
            <input type="radio" id="music" name="nav-tab"/>
            <div className="tabs">
              <ul>
                <li><label htmlFor="pic"><a className="title1 white">Profile</a></label></li>
                <li><label htmlFor="music"><a className="title1 white">Bio</a></label></li>
              </ul>
            </div>

            <div className="tab-content">
              <div className="tab-pane content-pic"></div>
              <div className="tab-pane content-music">  <div className=" bio"> {this.state.userData.bio} </div> </div>
            </div>

            {this.state.userData.created_crawls.length >= 3 && this.state.userData.created_crawls.map(crawl => crawl.comment).length >= 3 ?
              <h1 className="title-font"> ⭐ Gold star member</h1>
              : ''}
            <div className="center">
              <div>
              </div>
              <div style={{backgroundImage: `url(${this.state.userData.image})`}}className="user-image"/>

            </div>
            <h1 className="title is-4 title-font center"> @{this.state.userData.username} </h1>


            <div className="container margin">
              {this.state.userData.created_crawls.length >= 1 ? <div> <h1 className="title is-3 title-font center">Created Crawls</h1> <hr/> </div>: '' }
            </div>

            <div className="columns is-multiline is-centered">
              {this.state.userData.created_crawls.map(crawl =>


                <div className="column is-one-fifth small-margin" key={crawl.id}>
                  <Link to={`/crawls/${crawl.id}`}>
                    <h1 className="title is-6 center white">{crawl.name}</h1>
                    <div style={{backgroundImage: `url(${crawl.stops[0].bar.hero})`}}className="created-crawls center"/>
                  </Link>
                </div>
              )}

            </div>


            {this.state.userData.created_crawls.length === 0 ?
              <div> <h1 className="title is-2 title-font center"> No crawl's yet 😔 </h1>
                <Link to={'/crawls/new'} className="center"> <button className="button-styled center button"> Add my first crawl </button> </Link>
              </div>: ''}
          </div>
        </section>
      </main>
    )
  }
}

export default UserShow
