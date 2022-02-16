import React from "react";
import styled from "styled-components";

const CarrinhoStyle = styled.div`
  
  @import url('https://fonts.googleapis.com/css2?family=Red+Hat+Display&display=swap');
  
  * {
    font-family: 'Red Hat Display';
  }
  
  border: none;
  width: 400px;
  height: 100vh;
  float: right;
  padding:8px;
  background: #eaeaf5;
}
 

  .tabela-produtos {
    display: flex;
    justify-content: space-between;
    padding: 0 15px
  }

  .total-compra {
    display: flex;
    justify-content: space-between;
    padding: 5 15px;
    width: 35vw;
    height: 7vh;
    border:none;
  }

  .Finalizar{
    width: 35vw;
    height: 7vh;
    background:#66d5f1;
    color: #414141;
    border: none;
    font-size: 15px; 
  
  }
  .Finalizar:hover{
   
    background: #414141;
    color: #66d5f1;
  
  }

`

class Carrinho extends React.Component {
  
  render() {
    return (
      <div>
      <CarrinhoStyle>
        <div className="carrinho-compras">

        <h2>Meus Pedidos</h2>
        <br></br> 
          <div className="tabela-produtos"> 
              <p>PRODUTO</p>
              <p>SUBTOTAL</p>
          </div>

          <br></br> 
        <div className="total-compra">
          <h2>TOTAL</h2>
          <h2>R$0,00</h2>
        </div>
        <br></br> 
        <button className="Finalizar">Finalizar Compra</button>
      </div>
      </CarrinhoStyle>
      </div>
    );
  }
}

export default Carrinho;
