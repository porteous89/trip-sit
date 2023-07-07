"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import styles from "./navbar.module.css";
// import DarkToggle from "../darkToggle/DarkToggle";
// import { signOut, useSession } from "next-auth/react";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 3,
    title: "Chat",
    url: "/chat",
  },
  {
    id: 4,
    title: "Psychedelics",
    url: "/psychedelics",
  },
  {
    id: 5,
    title: "Safe Use",
    url: "/safe-use",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  //   const session = useSession();
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        <Image
          src="/mush-logo.png"
          alt="logo"
          width={100}
          height={100}
          className="object-contain"
        />
        <p className="logo_text">Trip Sit</p>
      </Link>
      <div className={styles.links}>
        {/* <DarkToggle /> */}
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        {/* {session.status === "authenticated" && ( */}
        {/* <button className={styles.logout} onClick={signOut}> */}
        Logout
        {/* </button> */}
        {/* )} */}
      </div>
    </div>
  );
};

export default Navbar;
