import React from "react";
import Header from "./components/Header";
import Partner from "./components/Partner";
import Works from "./components/Works";
import Features from "./components/Features";
import HotelSection from "./components/HotelSec";
import WhyChooseBocca from "./components/WhyChooseBocca";
import BoccaTokenSection from "./components/BoccaToken";
import Tokenomics from "./components/Tokenomics";
import RoadmapSection from "./components/Roadmap";
import Vision from "./components/Vision";
import Contactinfo from "./components/Contact";
import Navbar from "../../layout/navbar";
import Footer from "../../layout/footer";
//
//
//
function AboutPage() {
  return (
    <>
      <Navbar />
      <Header />
      <Partner />
      <Works />
      <Features />
      <HotelSection />
      <WhyChooseBocca />
      <BoccaTokenSection />
      <Tokenomics />
      <RoadmapSection />
      <Vision />
      <Contactinfo />
      <Footer />
    </>
  );
}

export default AboutPage;