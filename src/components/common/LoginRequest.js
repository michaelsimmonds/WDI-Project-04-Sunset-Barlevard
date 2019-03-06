import React from 'react'
import { Link } from 'react-router-dom'

const LoginRequest = () => {
  return (
    <section>
      <h2 className="title is-4">Want to comment on this crawl?
        <Link to='/login'>
          <button className="button button-styled">Login</button>
        </Link>
        <Link to = '/register'>
          <button className="button button-styled">Register</button>
        </Link>
      </h2>
    </section>
  )
}

export default LoginRequest
