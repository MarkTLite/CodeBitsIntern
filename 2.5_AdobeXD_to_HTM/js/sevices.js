"use strict";

const body = document.querySelector("body");

const header = function () {
  const html = `
  <header>
  <div class="header_logo">
    <img
      src="img/CodeBitsLogoWhiteNoBackgroung-3.png"
      height="120px"
      width="150px"
      alt="codeBits logo"
    />
    <p>Simple Effective Solutions</p>
  </div>
  <div>
    <ul class="header_links">
      <li>
        <div class="header_links-1"><a href="codebits.html">Home</a></div>
      </li>
      <li>
        <div class="header_links-2"><a href="aboutUs.html">About Us</a></div>
      </li>
      <li>
        <div class="header_links-3"><a href="services.html">Services</a></div>
      </li>
      <li>
        <div class="header_links-4"><a href="services.html">Contact</a></div>
      </li>
    </ul>
  </div>
</header>
  `;
  body.insertAdjacentHTML("afterbegin", html);
  const headerLink1 = document.querySelector(".header_links-1");
  const headerLink3 = document.querySelector(".header_links-3");

  headerLink1.classList.remove("header_links-1");
  headerLink3.classList.add("header_links-1");
};
header();

const footer = function () {
  const html = `
  <footer>
  <div>
    <p>CodeBits Company Limited</p>
    <p>Tuskys Building Ntinda-Trading Center</p>
    <p>Plot 1615, Old Kira Road</p>
    <p>P.O.Box 21400</p>
    <p>Kampala - Uganda</p>
  </div>
  <div class="footer-middle">
    <p>Subscribe to our newsletter</p>
    <div class="search-div">
      <input type="text" class="search-bar" placeholder="Email Address" />
      <div class="search-bar_div">OK</div>
    </div>
    <p>Copyright &copy; 2019 CodeBits Co.LTD</p>
  </div>
  <div class="footer-last">
    <p>Product Support</p>
    <p>Ask For Quote</p>
    <p>AOB</p>
    <p>Follow Us</p>
    <div>
      <ion-icon class="facebook-icon" name="logo-facebook"></ion-icon>
      <ion-icon class="twitter-icon" name="logo-twitter"></ion-icon>
      <ion-icon class="instagram-icon" name="logo-instagram"></ion-icon>
    </div>
  </div>
</footer>

  `;
  body.insertAdjacentHTML("afterend", html);
};
footer();
