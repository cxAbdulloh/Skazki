import React from "react";
import { LanguageProvider } from "./LanguageContext";
import Navbar from "./Components/Navbar/Navbar";
import BooksSection from "./Components/BooksSection/BooksSection";
import MagicAR from "./Components/MagicAR/MagicAR";
import Testimonials from "./Components/Testimonials/Testimonials";
import Footer from "./Components/Footer/Footer";
import "./index.css";
import AboutUs from "./Components/AboutUs/AboutUs";

const App = () => {
  return (
    <LanguageProvider>
      <div className="app-container">
        <Navbar />
        <main>
          <BooksSection />
          <AboutUs/>
          <MagicAR />
          <Testimonials />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;
