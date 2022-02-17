import React from "react";
import { CarrinhoStyle } from "../components/styles/styles";

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
