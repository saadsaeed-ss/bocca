import React from "react";
import Header from "./components/Header";
import Reward from "./components/Reward";
import IconText from "./components/IconText";
import DAO from "./components/DAO";
import Tokenomics from "../home/components/Tokenomics";
import Staking from "./components/Staking";
import Navbar from "../../layout/navbar";
import Footer from "../../layout/footer";

const token = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Reward />
      <IconText />
      <Staking />
      <DAO />
      <Tokenomics />

      <Footer />
    </>
  );
};

export default token;
