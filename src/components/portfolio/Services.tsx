import React from "react";
import Image from "next/image";
import { Signika, Urbanist } from "next/font/google";
import OrangeDot from "../../../public/orangeDot.png";
import classes from "@/styles/portfolio/services.module.scss";
import { services } from "@/utility/constant";
import Card from "../common/card/Card";

const signika = Signika({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "700", "500"],
});

const Services = () => {
  return (
    <div
      id="services"
      className={`${classes.mainContainer} ${urbanist.className}`}
    >
      <div className={classes.header}>
        <Image src={OrangeDot} alt="Orange Dot" />
        <span className={signika.className}>Services</span>
      </div>
      <h2 className={`${classes.heading} ${signika.className}`}>
        Services we provide
      </h2>

      <div className={classes.cardContainer}>
        {services.map((service, index) => (
          <Card {...service} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Services;
