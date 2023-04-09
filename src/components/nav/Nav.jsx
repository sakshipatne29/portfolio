/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./nav.css";

import { AiFillHome } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { MdOutlineMessage } from "react-icons/md";

import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiFillHome />
      </a>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <FaUserAlt />
      </a>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <MdOutlineMessage />
      </a>
    </nav>
  );
};

export default Nav;
