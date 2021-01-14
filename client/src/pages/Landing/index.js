import React from "react";
import Navbar from '../../components/CustomNavbar';
import Header from "../../components/Header";
import WeBelieve from '../../components/WeBelieve';
import OurHistory from '../../components/OurHistory';
import AboutUs from "../../components/AboutUs";
import Posts from "../../components/Posts";
import ContactForm from "../../components/ContactForm";
import Schedule from "../../components/Schedule";
import Footer from "../../components/Footer";

import './styles.css';

export default function Landing() {
  return (
    <div id="page-landing" className="page-landing">
      <Navbar />
      <Header />
      <WeBelieve />
      <Schedule />
      <OurHistory />
      <AboutUs />
      <Posts />
      <ContactForm />
      <Footer />
    </div>
  );
}