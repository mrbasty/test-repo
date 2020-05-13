import React from "react";

function Footer() {
  return (
    <div>
      <footer>
        <p>Created by Bastien Adam</p>
        <div class="social-link-container">
          <a
            class="social-link"
            href="https://dribbble.com/bastienadam"
            target="_blank"
          >
            <i class="fab fa-dribbble"></i> Dribbble
          </a>
          <a
            class="social-link"
            href="https://www.bastienadam.com"
            target="_blank"
          >
            <i class="fas fa-desktop"></i> Portfolio
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
