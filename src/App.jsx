import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion"; // Exit animatsiyasi uchun shart
import { LanguageProvider } from "./LanguageContext";
import Home from "./Pages/Home";
import Collection from "./Pages/Collection";
import Loader from "./Loader"; // Sizning Loader komponentingiz
import Fairy from "./Pages/Fairy";


const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Loader ichidagi sanash 3 soniya davom etadi (100 * 30ms)
    // Shuning uchun App.js 3-3.2 soniya kutishi kerak
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3200); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <LanguageProvider>
      {/* AnimatePresence loaderning silliq g'oyib bo'lishini ta'minlaydi */}
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="loader" />
        ) : (
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/memory" element={<Collection/>} />
              <Route path="/fairy" element={<Fairy/>} />
            </Routes>
          </Router>
        )}
      </AnimatePresence>
    </LanguageProvider>
  );
};

export default App;