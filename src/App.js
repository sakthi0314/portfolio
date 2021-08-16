import React, { Component } from "react";
import Navbar from "./components/navbar/navbar";
import Hero from "./sections/hero/hero";
import About from "./sections/profile/about";
import Skills from "./sections/skills/skills";
import sal from "sal.js";
import Contact from "./sections/contact/contact";
import Footer from "./sections/footer/footer";
import Projects from "./sections/projects/projects";

export class App extends Component {
  componentDidMount() {
    sal();
  }

  render() {
    return (
      <>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </>
    );
  }
}

export default App;
