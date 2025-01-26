import React, { Component, ReactNode } from "react";
import { Signika, Urbanist } from "next/font/google";
import classes from "@/styles/common/card.module.scss";
import { IconType } from "react-icons";

const signika = Signika({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "700", "500"],
});

type CardProps = {
  title: string;
  description: string;
  icon: IconType;
};

const Card = ({ title, description, icon }: CardProps) => {
  return (
    <div className={classes.mainContainer}>
      {typeof icon === "function" && React.createElement(icon)}
      <h4 className={signika.className}>{title}</h4>
      <p className={urbanist.className}>{description}</p>
    </div>
  );
};

export default Card;
