// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import Seo from '../components/seo'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <main>
      <h1>About Me</h1>
      <Link to="/">Back to Home</Link>
      <p>Hi there! This is my first site built with Gatsby.</p>
    </main>
  )
}

export const Head = () => <Seo title="About Me" />
// Step 3: Export your component
export default AboutPage