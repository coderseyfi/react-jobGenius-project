import React from 'react'
import { Link } from 'react-router-dom'
import img from '../assets/images/notFound.svg'
import Wrapper from '../assets/wrappers/ErrorPage'

const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={img} alt="not found" />
        <h3>Ohh! Page Not Found</h3>
        <p>We can't seem to find the page you are looking for</p>
        <Link to="/" className="err-btn">
          Back to home
        </Link>
      </div>
    </Wrapper>
  )
}

export default Error
