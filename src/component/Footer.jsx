import React from "react";
import "../styles/Footer.css";
import { Link, Events, scrollSpy } from "react-scroll";

import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import NewsLatter from "./NewsLatter";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <img src="\zenLogo.png" alt="" />
          </div>

          <div className="footer-col">
            <h4>Lers connect</h4>
            <ul>
              <li>
                <Link href="#">
                  4517 Washington Ave. Manchester, Kentucky 39495
                </Link>
              </li>
              <li>
                <Link href="#">zenset.ino@gmail.com</Link>
              </li>
              <li>
                <Link href="#">+91 9891075410</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Links</h4>
            <ul>
              <li>
                <a href="www.google.com">Case Study</a>
              </li>

              <li>
                <Link
                  to="Portfolio"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Portfolio
                </Link>
              </li>

              <li>
                <Link
                  to="Pricing"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  pricing
                </Link>
              </li>

              <li>
                <Link to="https://chatgpt.com/?oai-dm=1">Career</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <Link href="#">
                <AiFillInstagram />
              </Link>
              <Link href="#">
                <FaTwitter />
              </Link>
              <Link href="#">
                <FaFacebook />
              </Link>
            </div>
            <div className="newsLatter">
              <NewsLatter></NewsLatter>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
