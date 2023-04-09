import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";



const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://www.linkedin.com/in/sakshi-patne-b89a201b6/" target={"_blank"} rel="noreferrer">
        <BsLinkedin/>
      </a>
      <a href="https://github.com/sakshipatne29" target={"_blank"} rel="noreferrer">
        <BsGithub/>
      </a>
      <a href="https://twitter.com/sakshi_patne" target={"_blank"} rel="noreferrer">
        <BsTwitter/>
      </a>
    </div>
  );
};

export default HeaderSocials;
