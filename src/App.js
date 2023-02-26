import './App.css';
import { Footer, Header } from './containers';
import { Expereince, Skills, Projects, Navbar } from './components';
import ScrollToTop from "react-scroll-to-top";
import React, { useState, useEffect } from 'react';
import BeatLoader from "react-spinners/BeatLoader";
function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])
  return (
    <div className="App">
      {
        loading ?
          <div className='loadingScreen'>
            <BeatLoader
              color={"#174f8a"}
              loading={loading}
              size={40}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
          :
          <>
            <div className="gradient__bg">
              <Navbar />
              <Header />
            </div>
            <Skills />
            <Expereince />
            <Projects />
            <Footer />
            <ScrollToTop smooth />
          </>
      }
    </div>
  );
}
export default App;
