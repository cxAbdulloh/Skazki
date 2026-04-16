import React from 'react';
import Navbar from "../Components/Navbar/Navbar";
import BooksSection from "../Components/BooksSection/BooksSection";
import AboutUs from "../Components/AboutUs/AboutUs";
import MagicAR from "../Components/MagicAR/MagicAR";
import Testimonials from "../Components/Testimonials/Testimonials";
import Footer from "../Components/Footer/Footer";


const Home = () => {
  return (
    <div className="app-container">
      <Navbar />
      <main>

        <BooksSection />
        <AboutUs />
        <MagicAR />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Home;