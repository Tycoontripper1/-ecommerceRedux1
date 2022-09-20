import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FaTwitterSquare} from 'react-icons/fa'

export const HeaderSocials = () => {
  return (
    <div className='header_socials'>
         <a href='https:://linkdin.com' target="_blank"><BsLinkedin /></a>
         <a href='https:://github.com' target="_blank"><BsGithub /></a>
         <a href='https:://twitter.com' target="_blank"><FaTwitterSquare /></a>
    </div>
  )
}
