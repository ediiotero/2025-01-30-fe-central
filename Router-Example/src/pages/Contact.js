import React from 'react'
import Image from 'react-bootstrap/Image';
import moviePosters  from '../images/movies.jpg'

const Contact = () => {
  return (
    <Image src={moviePosters} roundedCircle fluid/>
  )
}

export default Contact