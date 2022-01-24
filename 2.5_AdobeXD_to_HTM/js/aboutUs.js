"use strict";

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
        <div class="header_links-2"><a href="aboutUs.htm">About Us</a></div>
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
  const body = document.querySelector("body");
  body.insertAdjacentHTML("afterbegin", html);

  const headerLink1 = document.querySelector(".header_links-1");
  const headerLink2 = document.querySelector(".header_links-2");

  headerLink1.classList.remove("header_links-1");
  headerLink2.classList.add("header_links-1");
};
header();
