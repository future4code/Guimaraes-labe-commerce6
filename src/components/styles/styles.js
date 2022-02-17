import styled from "styled-components";

// Estilos para o Header
export const AppHeader = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Red+Hat+Display&display=swap");

  * {
    font-family: "Red Hat Display";
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  border-bottom: 1px solid black;
  background: #eaeaf5;

  .header-logo {
    display: flex;
    align-items: center;
    padding: 10px;
  }

  .header-logo img {
    height: 90px;
    width: 90px;
    padding: 0 15px;
  }

  .header-links {
    display: flex;
  }

  .header-links ul {
    display: flex;
    list-style-type: none;
  }

  .header-links li {
    margin-left: 15px;
  }

  .search-bar {
    display: flex;
    align-items: center;
  }

  .search-bar input {
    width: 450px;
    padding: 5px;
    background: #66d5f1;
    color: #414141;
    border-radius: 5px;
    border: none;
  }

  .search-bar input:hover {
    background: #414141;
    color: #66d5f1;
  }

  .header-buttons button {
    margin-left: 20px;
    padding: 5px;
  }

  .IconCarrinho {
    width: 30px;
    padding: 5px;
  }

  .avatar {
    display: flex;
    align-items: center;
    padding: 0 15px;
  }

  .avatar img {
    height: 40px;
  }
`;

// Estilos para o Carrinho
export const CarrinhoStyle = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Red+Hat+Display&display=swap");

  * {
    font-family: "Red Hat Display";
  }

  .tabela-produtos {
    display: flex;
    justify-content: space-between;
    padding: 0 15px;
  }

  .total-compra {
    display: flex;
    justify-content: space-between;
    padding: 5 15px;
    width: 100%;
    height: 7vh;
    border: none;
  }

  .Finalizar {
    width: 100%;
    height: 7vh;
    background: #66d5f1;
    color: #414141;
    border: none;
    font-size: 15px;
  }
  .Finalizar:hover {
    background: #414141;
    color: #66d5f1;
  }
`;
