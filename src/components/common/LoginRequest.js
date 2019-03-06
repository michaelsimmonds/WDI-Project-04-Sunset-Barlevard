import React from 'react'
import { Link } from 'react-router-dom'

const LoginRequest = () => {
  return (
    <section>
      <h1 className="subtitle is-5">Got thoughts on this bar crawl?
        <Link to='/login'>
          <button className="button button-styled">Login</button>
        </Link>
        <Link to = '/register'>
          <button className="button button-styled">Register</button>
        </Link>
      </h1>
    </section>
  )
}

export default LoginRequest
