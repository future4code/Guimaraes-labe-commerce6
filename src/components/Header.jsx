import React from "react";
import { AppHeader } from "../styles";
import logo from '../assets/rocket.png'
import avatar from '../assets/avatar-img.png'

export default function Header() {
  return (
    <div>
      <AppHeader>
        <div className="header-logo">
          <img
            src={logo}
            id="rocket"
            alt="rocket"
          />
          <h1>LabeCommerce</h1>
        </div>
        <div className="header-links">
          <ul>
            <li>Anuncie</li>
            <li>Registre-se</li>
          </ul>
        </div>
        <div className="header-buttons">
          <button>Login</button>
          <button>Meu Carrinho</button>
        </div>
        <div className="avatar">
          <img
            src={avatar}
            id="avatar"
            alt="avatar"
          />
        </div>
      </AppHeader>
    </div>
  );
}
