/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import pic5 from '../../assets/pic5.JPG'
import "./about.css";

import { FaAward } from "react-icons/fa";
import { AiOutlineProject } from "react-icons/ai";
import { MdPeople } from "react-icons/md";

const About = () => {
  return (
    <section>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
      <div className='about_me'>
          <div className='about_me_image'>
            <img src={pic5} alt="About Image"/>
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>1.8 years Working</small>
            </article>
            <article className="about_card">
              <AiOutlineProject className="about_icon" />
              <h5>Projects</h5>
              <small>GEHC</small>
            </article>
            <article className="about_card">
              <MdPeople className="about_icon" />
              <h5>Clients</h5>
              <small>China, Germany, USA, Australia</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam explicabo maiores cum distinctio inventore voluptatibus nobis veritatis modi reprehenderit molestias assumenda animi perferendis atque natus, esse optio. Doloribus, quidem nulla.</p>
          <a href='#' className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  );
};

export default About;
