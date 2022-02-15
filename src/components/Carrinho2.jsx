import React from "react";
import styled from "styled-components";

const CarrinhoStyle = styled.div`
  
  @import url('https://fonts.googleapis.com/css2?family=Red+Hat+Display&display=swap');
  
  * {
    font-family: 'Red Hat Display';
  }
  
  border: 1px solid black;
  width: 400px;
  float: right;
  
  .carrinho-compras {
    text-align: center;
  }

  .tabela-produtos {
    display: flex;
    justify-content: space-between;
    padding: 0 15px
  }

  .total-compra {
    display: flex;
    justify-content: space-between;
    padding: 0 15px
  }

`

class Carrinho2 extends React.Component {
  render() {
    return (
      <div>
      <CarrinhoStyle>
        <div className="carrinho-compras">
        <h2>Carrinho de Compras</h2>
          <div className="tabela-produtos">
              <p>PRODUTO</p>
              <p>SUBTOTAL</p>
          </div>
        <div className="total-compra">
          <h2>TOTAL</h2>
          <h2>R$0,00</h2>
        </div>

        <button>Finalizar Compra</button>
      </div>
      </CarrinhoStyle>
      </div>
    );
  }
}

export default Carrinho2;
