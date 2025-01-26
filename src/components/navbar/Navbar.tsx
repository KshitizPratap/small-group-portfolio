"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Signika } from "next/font/google";
import Logo from "../../../public/logo.jpeg";
import classes from "./navbar.module.scss";
import { usePathname, useRouter } from "next/navigation";

const signika = Signika({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Navbar = () => {
  const isPortfolioPage = usePathname() === "/portfolio";
  const navigate = useRouter();

  return (
    <div className={classes.mainContainer}>
      <Link href="/" className={classes.header}>
        <Image src={Logo} alt="Small Group" className={classes.logo} />
        <h1 className={signika.className}>Small Group</h1>
      </Link>
      <button
        onClick={() => {
          isPortfolioPage ? "" : navigate.push("/portfolio");
        }}
        className={`${classes.portfolioCTA} ${signika.className}`}
      >
        {isPortfolioPage ? "Contact Us" : "Visit Portfolio"}
      </button>
    </div>
  );
};

export default Navbar;
