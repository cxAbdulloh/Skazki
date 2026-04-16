import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Mana shu joyi muhim
import { LanguageProvider } from "./LanguageContext";
import Home from "./Pages/Home";
import Collection from "./Pages/Collection";

const App = () => {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
};

export default App;