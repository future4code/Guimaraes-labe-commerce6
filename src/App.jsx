import React from "react";
import dados from "./data/data.json";
import Header from "./components/Header";
import Carrinho from "./components/Carrinho";
import Produtos from "./components/Produtos";
import Filtro from "./components/Filtro";

import styled from "styled-components";
import { Grid } from "@mui/material";

const AppStyle = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Red+Hat+Display&display=swap");

  * {
    font-family: "Red Hat Display";
    box-sizing: border-box;
  }

  .body-container {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    justify-items: center;
  }

  .shopping-cart {
    width: 320px;
    height: 100vh;
    float: right;
    padding: 10px;
    background: #eaeaf5;
  }

  .product-list {
    display: grid;
    width: 100%;
    margin-bottom: 15px;
    text-align: center;
    padding: 15px;
    gap: 10px;
  }

  .filter {
    margin: 0;
    height: 100vh;
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
          <div className="body-container">
            <div className="filter">
              <Filtro />
            </div>

            <div className="product-list">
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Produtos produtos={dados} />
              </Grid>
            </div>
            <div className="shopping-cart">
              <Carrinho />
            </div>
          </div>
        </main>
      </AppStyle>
    </div>
  );
}

export default App;
