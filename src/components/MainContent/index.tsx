
import React, { useMemo, useEffect, useRef, useState } from "react";
import styles from './index.module.scss';
import MainSection from "../Body/MainSection";
import OnBoarding from "../Body/OnBoarding";
import StartBuilding from "../Body/StartBuilding";
import Dream from "../Body/Dream";
import Hack from "../Body/Hack";
import Journey from "../Body/Journey";
import BestPractice from "../Body/BestPractice";
import Infinity from "../Body/Infinity";
import MoreInfo from "../Body/MoreInfo";
import Testimony from "../Body/Testimony";
import Topbar from "../Header/Topbar";

import Footer from "./../../components/Footer";
import Navbar from './../../components/Header/Navbar';

const MainContent = () => {

    return (
        <div>
          <Topbar />
          <Navbar />
          <MainSection></MainSection>
          <OnBoarding></OnBoarding>
          <StartBuilding />
          <Dream />
          <Hack />
          <Journey />
          <BestPractice />
          <Infinity />
          <Testimony />
          <MoreInfo />
          <Footer />
        </div>    
    )
}
export default MainContent;  