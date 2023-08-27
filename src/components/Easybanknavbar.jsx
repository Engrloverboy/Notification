import React from "react";
import styled from "styled-components";
import logo from "../assets/image/logo.svg";

const Easybanknavbar = () => {
  return (
    <Easynavbar>
      <nav className="container_2">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Blog</li>
          <li>Careers</li>
        </ul>

        <button>Request Invite</button>
      </nav>
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
      color: hsl(233, 8%, 62%);
    }

    button {
      padding: 10px 20px;
      border-radius: 20px;
      font-size: 12px;
      border: 1px;
      background-color: hsl(136, 65%, 51%);
      color: white;
    }
  }
`;
