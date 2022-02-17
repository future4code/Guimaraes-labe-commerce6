import React from "react";
import dados from "./data/data.json";
import Header from "./components/Header";
import Carrinho from "./components/Carrinho";
import Produtos from "./components/Produtos";
import Filtro from "./components/Filtro";

import styled from "styled-components";

const AppStyle = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Red+Hat+Display&display=swap");

  * {
    font-family: "Red Hat Display";
  }

  .App {
    display: grid;
  }

  .shopping-cart {
    border: none;
    width: 320px;
    height: 100vh;
    float: right;
    padding: 8px;
    background: #eaeaf5;
  }

  .product-list {
    margin-bottom: 15px;
    text-align: center;
    padding: 15px;
    display: grid;
    gap: 10px;
  }

  .filter {
    width: 15%;
    height: 100vh;
    border: 1px solid black;
    float: left;
    background: #eaeaf5;
  }
`;

function App() {
  return (
    <div className="App">
      <AppStyle>
        <header>
          <Header />
        </header>
        <main>
          <div className="shopping-cart">
            <Carrinho />
          </div>
          {/* <div className="product-list">
          <Produtos produtos={dados} />
        </div> */}
          <div className="filter">
            <Filtro />
          </div>
        </main>
      </AppStyle>
    </div>
  );
}

export default App;
