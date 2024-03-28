import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div>
      <section className="error-page d-flex justify-content-center align-items-center vh-100 " >
        <div className="text-center ">
          <Link to="/">
            <button type="button" className="btn btn-secondary" >Go to Home</button>
          </Link>
          <h1 className='pt-3'>Page Not Found</h1>
        </div>
      </section>
    </div>
  )
}

export default ErrorPage
