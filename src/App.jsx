import React, { useState } from 'react'
import Home from './Sections/Home'
import About from './Sections/About'
import Navbar from './components/Navbar'
import Experience from './Sections/Experience'
import Projects from './Sections/Projects'
import Coding from './Sections/Coding'
import Certificates from './Sections/Certificates'
import Contact from './Sections/Contact'
import Footer from './Sections/Footer'
import LoadingAnimation from './components/LoadingAnimation'

const App = () => {
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setShowContent(true);
  };

  return (
    <div className='bg-primary'>
      {!showContent && <LoadingAnimation onComplete={handleLoadingComplete} />}
      {showContent && (
        <>
          <Navbar />
          <Home />
          <About />
          <Experience />
          <Projects />
          <Coding />
          <Certificates />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  )
}

export default App
