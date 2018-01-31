import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex'
        }}
      >
        <img
          src={profilePic}
          alt={`Kyle Mathews`}
        />
        <p>
          This is a blog built for GuruSorocaba to show the world Gatsby!
        </p>
      </div>
    )
  }
}

export default Bio
