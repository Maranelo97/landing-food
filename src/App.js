import { useRef } from "react";

import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const testimonialRef = useRef(null);
  const contactRef = useRef(null);

  const handleScrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <Navbar
        onScrollTo={(section) => {
          switch (section) {
            case "home":
              handleScrollTo(homeRef);
              break;
            case "about":
              handleScrollTo(aboutRef);
              break;
            case "work":
              handleScrollTo(workRef);
              break;
            case "testimonial":
              handleScrollTo(testimonialRef);
              break;
            case "contact":
              handleScrollTo(contactRef);
              break;
            default:
              break;
          }
        }}
      />
      <Home ref={homeRef} />
      <About ref={aboutRef} />
      <Work ref={workRef} />
      <Testimonial ref={testimonialRef} />
      <Contact ref={contactRef} />
      <Footer />
    </div>
  );
}

export default App;
