import React, { useRef } from "react";
import "normalize.css";
import "css/App.css";

import Hero from "sections/Hero";
import Header from "sections/Header";
import Bio from "sections/Bio";
import Work from "sections/Work";
import Footer from "sections/Footer";

const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);

function App() {
  const workRef = useRef(null);
  const meRef = useRef(null);
  const scrollToWork = () => scrollToRef(workRef);
  const scrollToMe = () => scrollToRef(meRef);
  return (
    <div className="app">
      <Header
        onWorkClick={() => scrollToWork()}
        onMeClick={() => scrollToMe()}
      />
      <Hero />
      <Bio meRef={meRef} />
      <Work workRef={workRef} />
      <Footer />
    </div>
  );
}

export default App;
