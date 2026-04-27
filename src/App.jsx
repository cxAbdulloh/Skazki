import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { LanguageProvider } from "./LanguageContext";
import Home from "./Pages/Home";
import Collection from "./Pages/Collection";
import Loader from "./Loader";
import Fairy from "./Pages/Fairy";
import "./App.css"; 
import ContactSection from "./Pages/ContactSection/ContactSection";


const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LanguageProvider>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="loader" />
        ) : (
          <div className="app-main-wrapper">
            <Router>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/memory" element={<Collection />} />
                <Route path="/fairy" element={<Fairy />} />
                <Route path="/contact" element={<ContactSection/>}/>
              </Routes>
            </Router>
          </div>
        )}
      </AnimatePresence>
    </LanguageProvider>
  );
};

export default App;