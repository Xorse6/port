
// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Navbar from './Components/Navbar';
// import Footer from './Components/Footer';
// import Home from './pages/Home';
// import About from './pages/About';
// import Skills from './Pages/Skills';
// import Projects from './Pages/Projects';
// import ProjectPage from './Pages/ProjectPage';
// import Contact from './pages/Contact';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const App = () => {
//   return (
//     <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[5vw]">
//       <ToastContainer />
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/skills" element={<Skills />} />
//         <Route path="/projects" element={<Projects />} />
//         <Route path="/projectpage/:id" element={<ProjectPage />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>

//       <Footer />
//     </div>
//   );
// };

// export default App;



import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import ProjectPage from './Pages/ProjectPage';
import Contact from './pages/Contact';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Preloader from './Components/Preloader'; // Import the Preloader component

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating an async task to hide the preloader after a few seconds
    setTimeout(() => {
      setLoading(false); // Set loading to false after 3 seconds
    }, 3000); // Adjust the time according to your needs
  }, []);

  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[5vw]">
      <ToastContainer />
      
      {/* Display Preloader while loading */}
      {loading && <Preloader />}

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projectpage/:id" element={<ProjectPage />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
