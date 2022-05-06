import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AllProjects from "./components/AllProjects";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [darkMode, setDarkMode] = useState(false);
  const handleMode = () => {
    setDarkMode(!darkMode)
  }

  return (
  <div className={`overflow-hidden ${darkMode ? "dark" : ""}`} id="dark">
      <Router>
          <Navbar handleMode={handleMode} darkMode={darkMode} />
            <Routes >
              <Route
                path='/'
                element={<Home />}
              />
              <Route
                path='/allprojects'
                element={<AllProjects />}
              />
            </Routes>
          <Footer />
      </Router>
    </div>
  )
};
export default App;
