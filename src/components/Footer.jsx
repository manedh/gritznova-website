import React from 'react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        {/* Footer Main */}
        <div className="footer-main">

          {/* Brand */}
          <div className="footer-brand">
            <Logo />

            <p>
              Engineering software, AI, and cloud solutions for businesses ready to scale.
            </p>

            <div className="social-heading">
              Find us at
            </div>

            {/* Social Media */}
            <div className="socials">

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="19"
                  height="19"
                  fill="#0A66C2"
                  aria-hidden="true"
                >
                  <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2.01 2.01 0 1 0 5.25 7.02 2.01 2.01 0 0 0 5.25 3ZM20.44 13.41c0-3.47-1.85-5.09-4.32-5.09-1.99 0-2.88 1.09-3.38 1.86V8.5H9.36V20h3.38v-6.4c0-1.69.32-3.33 2.42-3.33 2.07 0 2.1 1.94 2.1 3.44V20h3.18v-6.59Z" />
                </svg>

                <span>LinkedIn</span>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="19"
                  height="19"
                  fill="none"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient
                      id="instagramGradient"
                      x1="0%"
                      y1="100%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#F58529" />
                      <stop offset="50%" stopColor="#DD2A7B" />
                      <stop offset="100%" stopColor="#8134AF" />
                    </linearGradient>
                  </defs>

                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                    stroke="url(#instagramGradient)"
                    strokeWidth="2"
                  />

                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                    stroke="#DD2A7B"
                    strokeWidth="2"
                  />

                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1.2"
                    fill="#F58529"
                  />
                </svg>

                <span>Instagram</span>
              </a>

              {/* X / Twitter */}
              <a
                href="https://x.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="X / Twitter"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="19"
                  height="19"
                  fill="#ffffff"
                  aria-hidden="true"
                >
                  <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-6.39L6.48 22H3.37l7.24-8.28L3 2h6.4l4.42 5.84L18.9 2Zm-1.1 17.85h1.73L8.48 4.04H6.62L17.8 19.85Z" />
                </svg>

                <span>Twitter </span>
              </a>

            </div>
          </div>

          {/* Explore */}
          <div>
            <h4>Explore</h4>

            <a href="#solutions">Solutions</a>
            <a href="#products">Products</a>
            <a href="#services">Services</a>
          </div>

          {/* Company */}
          <div>
            <h4>Company</h4>

            <a href="#about">About</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
          </div>

          {/* Services */}
          <div>
            <h4>Services</h4>

            <a href="#services">Custom Software</a>
            <a href="#services">AI & Machine Learning</a>
            <a href="#services">Agentic AI</a>
            <a href="#services">Cloud & DevOps</a>
            <a href="#services">Managed IT</a>
          </div>

          {/* Contact */}
          <div>
            <h4>Contact</h4>

            <a href="mailto:connect@gritznova.com">
              connect@gritznova.com
            </a>

            <a href="tel:+917559660623">
              +91 7559660623
            </a>

            <span>
              Bangalore, India
            </span>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">


          <span>
  <span className="copyright-symbol">©</span> 2026 GRITZNOVA. All rights reserved.
</span>
          <span>
            Software · AI · Cloud · Engineering
          </span>

        </div>

      </div>
    </footer>
  );
}