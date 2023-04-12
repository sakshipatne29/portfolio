/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./footer.css";

import {FaFacebookF} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        Portfolio
      </a>
      <ul class="socials">
        <li>
          <a href="#">
            <FaFacebookF/>
          </a>
        </li>
        <li>
          <a href="#">
            <AiFillInstagram/>
          </a>
        </li>
        <li>
          <a href="#">
            <BsTwitter/>
          </a>
        </li>
      </ul>
      <div class='footer-bottom'>
        <h5>© Portfolio. All rights reserved </h5>
      </div>
    </footer>
  );
};

export default Footer;
