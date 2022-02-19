import React from "react";
import dados from "./data/data.json";
import Header from "./components/Header";
import Produtos from "./components/Produtos";
import Filtro from "./components/Filtro";
import Carrinho from "./components/Carrinho";
import "./App.css"

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
    
  }


  .product-list {
    display:grid;
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 18px;
      grid-row-gap:18px;
      width: 100%;
      margin-bottom: 15px;
      text-align: center;
      padding: 15px;
  
  }

  

  .Esquerda
  {
    margin: 10px;
    padding:10px;
    height: 100vh;
    float: left;
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
            <div className="Esquerda">
              <Filtro />
              <br></br>
              <Carrinho/>
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

          </div>
        </main>
      </AppStyle>
    </div>
  );
}

export default App;
