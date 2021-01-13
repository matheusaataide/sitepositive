import React from "react";
import Navbar from '../../components/Navbar';
import Header from "../../components/Header";
import WeBelieve from '../../components/WeBelieve';
import History from '../../components/History';
import AboutUs from "../../components/AboutUs";
import Blog from "../../components/Blog";

import './styles.css';
import ContactForm from "../../components/ContactForm";
import Schedule from "../../components/Schedule";

export default function Landing() {
  return (
    <div id="page-landing" className="page-landing">
      <Navbar />
      <Header />
      <WeBelieve />
      <Schedule />
      
      <History />
      <AboutUs />
      <Blog />
    </div>
  );
}