// import React from 'react'
// import axios from 'axios'
//
// class Register extends React.Component{
//   constructor(){
//     super()
//
//     // image success, when true, will display flash message and remove image upload button
//     this.state = {
//       postData: {}
//     }
//   }
//
//   handleSubmit(e){
//     e.preventDefault()
//     axios.post('/api/register', this.state.postData)
//       .then(() => {
//         Flash.setMessage('success', 'Please check your email address to verify your account' )
//         this.props.history.push('/login')
//       })
//       .catch(err => this.setState({ errors: err.response.data }))
//   }
//
//   render(){
//     console.log(this.state.register)
//     return(
//       <h1>Register</h1>
//     )
//   }
// }
//
// export default Register
