import styled from "styled-components";

// Estilos para o Header
export const AppHeader = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Red+Hat+Display&display=swap");

  * {
    font-family: "Red Hat Display";
  }

  display: flex;
  justify-content: center;
  border-radius: 5px;
  flex-direction: row;
  height: 100px;
  width: 100%;
  background: rgba(234, 234, 245, 0.678);


.Nav{
  position:relative;
  float:left;
  list-style-type: none;
  align-items: center;
}
  .header-logo {
    display: flex;
    align-items: center;
    padding: 10px;
  }

  .logo {
    height: 100px;
    padding: 0 15px;
    border-radius: 60px;
  }

  .header-links {
    display: flex;
  }

  .nav-tabs ul {
    display: flex;
    flex-direction: row;
    list-style-type: none;
  }

  .nav-item li {
    display: flex;
    flex-direction: row;
    margin-left: 15px;
  }

  .search-bar {
    display: flex;
    align-items: center;
  }

  input{
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
  }`;

  export const CarrinhoStyle = styled.div`
    width: 20vw;
    height: 100vh;
    background: rgba(102, 213, 241, 0.678);
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
    border-radius:5px;
    padding: 30px;
    margin:10px
    padding-top:30px;

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

  .Finalizar{
    width: 100%;
    height: 7vh;
    background: #eaeaf5;
    color: #414141;
    border: none;
    font-size: 15px;
  }
  .Finalizar:hover {
    background: #414141;
    color: #66d5f1;
  }

`;

 

// Estilos para o Filtro



