import React, { useState } from "react";

import logo from "../assets/logo2.png";
import cart from "../assets/carts.png";
import login from "../assets/login.png";

import { AppHeader } from "../components/styles/styles";

import { Avatar } from "@mui/material";
import { red } from "@mui/material/colors";
import SearchIcon from "@mui/icons-material/Search";

export default function Header() {
  const [input, setInput] = useState();

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div>
      <AppHeader>
        <div className="header-logo">
          <img src={logo} id="rocket" alt="rocket" />
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
          <input
            type="text"
            placeholder="Pesquisa..."
            value={input}
            onChange={handleInputChange}
          />
          <SearchIcon />
        </div>
        <div className="header-buttons">
          <img className="IconCarrinho" src={login} id="login" alt="login" />
          <img className="IconCarrinho" src={cart} id="rocket" alt="rocket" />
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
