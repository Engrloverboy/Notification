import React from "react";
import styled from "styled-components";
import logo from "../assets/image/logo.svg";
import hamburger from "../assets/image/icon-hamburger.svg";

const Easybanknavbar = () => {
  return (
    <Easynavbar>
      <div className="overflow">
        <nav className="container_2 container_mobile">
          <img src={logo} alt="" />
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>

          <button>Request Invite</button>

          <div className="hamburger">
            <img src={hamburger} alt="" />
          </div>
        </nav>
      </div>
    </Easynavbar>
  );
};

export default Easybanknavbar;

let Easynavbar = styled.nav`
  nav {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    align-items: center;

    ul {
      display: flex;
      justify-content: space-between;
      width: 250px;
      font-size: 12px;
    }
    li{
        color: hsl(233, 8%, 62%);
    &:hover {
        color: hsl(233, 26%, 24%);
        text-decoration: underline;
      }
    }
    }

    button {
      padding: 10px 20px;
      border-radius: 20px;
      font-size: 12px;
      border: 1px;
      background-color: hsl(136, 65%, 51%);
      color: white;

      &:hover {
        background-color: blue;
      }
    }
  }

  @media (max-width: 911px) {
    .overflow {
      overflow: hidden;
    }
    nav {
      position: relative;
    }
    nav ul {
      padding: 10px;
      display: block;
      position: absolute;
      background-color: hsl(233, 8%, 62%);
      color: white;
      width: 200px;
      top: 20px;
      right: 44px;
      transform: translateX(300px);
    }

    .active {
      transform: translateX(0px);
    }
    nav ul li {
      padding: 10px;
      font-size: 16px;
    }
    button {
      display: none;
    }
    .container_mobile {
      max-width: 850px;
      margin: 0 auto;
      padding: 20px;
    }
  }

  @media (min-width: 912px) {
    .hamburger {
      display: none;
    }
  }
`;
