import React, { Component } from "react";
import Navbar from "./components/navbar/navbar";
import Hero from "./sections/hero/hero";
import About from "./sections/profile/about";
import Skills from "./sections/skills/skills";
import sal from "sal.js";
import Contact from "./sections/contact/contact";
import Footer from "./sections/footer/footer";
import Projects from "./sections/projects/projects";
import Loader from "./components/loader/loader";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 4000);
    sal();
  }

  render() {
    return (
      <>
        <Loader
          style={
            this.state.isLoading ? {} : { opacity: 0, visibility: "hidden" }
          }
        />
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
