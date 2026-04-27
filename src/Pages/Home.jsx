import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import BooksSection from "../Components/BooksSection/BooksSection";
import AboutUs from "../Components/AboutUs/AboutUs";
import MagicAR from "../Components/MagicAR/MagicAR";
import Testimonials from "../Components/Testimonials/Testimonials";
import Footer from "../Components/Footer/Footer";
import Hero from "../Components/Hero/Hero";
import PriceSection from "../Components/PriceSection/PriceSection";



const Home = () => {
  return (
    <div className="app-container">
      <Navbar />

      <main>
        <Hero />
        <BooksSection />
         <PriceSection/>
        <AboutUs />
        <MagicAR />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
