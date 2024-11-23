import React from "react";
import UserLayout from "../../components/Layout/userlayout";
import Homehero from "../../components/Homehero";
import Welcome from "../../components/Welcome";
import BestProducts from "../../components/Bestproducts";
import Gallery from "../../components/gallery";
import Contact from "../../components/Contact";
import "./style.css";
import Portfolio from "../../components/Portfolio";

const Home = () => {
  return (
    <>
      <UserLayout>
        <Homehero />
        <Welcome />
        <Portfolio />
        <BestProducts limit={8} />
        <Gallery />
        <Contact />
        {/* <Contact /> */}
      </UserLayout>
    </>
  );
};

export default Home;
