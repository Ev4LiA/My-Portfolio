import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from './components';

import { Home, About, Contact, Projects, Error } from './pages';

function App() {
  useEffect(() => {
    document.title = 'My Portfolio';
  }, []);

  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
