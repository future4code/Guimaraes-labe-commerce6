import React from "react";
import logo from "../assets/rocket.png";

import { AppHeader } from "../styles";

import { Avatar } from "@mui/material";
import { red } from "@mui/material/colors";
import SearchIcon from "@mui/icons-material/Search";

export default function Header() {
  return (
    <div>
      <AppHeader>
        <div className="header-logo">
          <img src={logo} id="rocket" alt="rocket" />
          <h1>LabeCommerce</h1>
        </div>
        <div className="header-links">
          <ul>
            <strong>
              <li>Anuncie</li>
            </strong>
            <strong>
              <li>Registre-se</li>
            </strong>
          </ul>
        </div>
        <div className="search-bar">
          <input type="text" />
          <SearchIcon />
        </div>
        <div className="header-buttons">
          <button>Login</button>
          <button>Meu Carrinho</button>
        </div>
        <div className="avatar">
          <Avatar sx={{ bgcolor: red[500], fontFamily: "Red Hat Display" }}>
            TC
          </Avatar>
        </div>
      </AppHeader>
    </div>
  );
}
