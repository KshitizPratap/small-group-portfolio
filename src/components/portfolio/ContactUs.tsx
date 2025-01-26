import React from "react";
import Image from "next/image";
import OrangeDot from "../../../public/orangeDot.png";
import classes from "@/styles/portfolio/contactUs.module.scss";
import { Signika, Urbanist } from "next/font/google";
import { FaPhoneVolume } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const signika = Signika({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "700", "500"],
});

const ContactUs = () => {
  return (
    <div className={`${classes.mainContainer} ${urbanist.className}`}>
      <div className={classes.header}>
        <Image src={OrangeDot} alt="Orange Dot" />
        <span className={signika.className}>Contact Us</span>
      </div>
      <h2 className={`${classes.heading} ${signika.className}`}>
        We want to hear from you
      </h2>
      <div className={classes.contactWrapper}>
        <form action="" className={classes.formContainer}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className={urbanist.className}
          />
          <input
            type="number"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="Phone Number"
            className={urbanist.className}
          />
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject"
            className={urbanist.className}
          />
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            className={urbanist.className}
          />
          <textarea
            name="msg"
            id="msg"
            placeholder="Message"
            className={urbanist.className}
          ></textarea>
          <button className={urbanist.className}>Send Us Message</button>
        </form>
        <div className={classes.detailsContainer}>
          <div className={classes.detail}>
            <div className={classes.iconWrapper}>
              <FaPhoneVolume />
            </div>
            <div className={classes.detailContent}>
              <h5>Phone</h5>
              <span>+91-8472465821</span>
            </div>
          </div>
          <div className={classes.detail}>
            <div className={classes.iconWrapper}>
              <MdEmail />
            </div>
            <div className={classes.detailContent}>
              <h5>Email</h5>
              <span>sales@smallgrp.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
