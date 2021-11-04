import React from "react"
import { Link } from "react-router-dom"
// import logo from './logo.svg';
import "./About.css"

const About = props => {
  return (
    <div className="About">
      <h1>About Us</h1>
      <section className="main-content">
        <img alt="about us" src="https://picsum.photos/200?page=about" />
        <p>
          Matrix rich-clientAPIs maximize, rich-clientAPIs functionalities
          cutting-edge cutting-edge exploit dynamic turn-key one-to-one share."
          Efficient deliver cross-platform infomediaries ROI; facilitate
          infrastructures orchestrate standards-compliant--wikis deliverables.
          Semantic standards-compliant B2B harness systems; architect
          user-centric visualize mesh next-generation, interactive engineer
          enable users innovative leverage envisioneer user-contributed
          communities podcasting unleash?
          <br />
          <br />
          <Link to="/animals">Check out our animals!</Link>
        </p>
      </section>
    </div>
  )
}

export default About
