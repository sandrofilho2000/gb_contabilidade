import React from "react";
import Navbar from "../cells/Navbar";
import Hero from "./Hero";
import Services from "./Services";
import AboutMe from "./AboutMe";
import Testimonials from "./Testimonials";
import TextImg from "./TextImg";
import GoogleMaps from "./GoogleMaps";
import Awards from "./Awards";
import InstagramSection from "./InstagramSection";
import Clients from "./Clients";
import Footer from "./Footer";
import MadeBy from "./MadeBy";
import MobileMenu from "../cells/MobileMenu";
import WhatsAppFloat from "../atoms/WhatsAppFloat";

const HomeContent = () => {
  return (
    <div>
      <Navbar />
      <MobileMenu />
      <Hero />
      <WhatsAppFloat />
      <main id="main">
        <Services />
        <AboutMe />
        <Testimonials />
        <Awards />
        <TextImg />
        <InstagramSection />
        <Clients />
        <GoogleMaps />
        <Footer />
        <MadeBy />
      </main>
    </div>
  );
};

export default HomeContent;
