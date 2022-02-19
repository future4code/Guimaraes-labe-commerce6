import React from "react";
import CardProduto from "./components/CardProduto";
import styled from "styled-components";

const ProdutoCarrinho = styled.div`
  
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

  .BotaoContador{
      border-radius: 5px;
      background: #6faf6f;
  }

`


class ItemCarrinho extends React.Component {
  state = {
    valorContador: 1
  }

  onClickSoma = () => {

    const valorAtual = this.state.valorContador
    const valorFinal = valorAtual + 1

    this.setState({ valorContador: valorFinal })
  }

  onClickSubtrai = () => {
    const valorAtual = this.state.valorContador
    const valorFinal = valorAtual - 1

    this.setState({ valorContador: valorFinal })
  }

 ValorTotal = () => {
    let ValorTotal =  this.props.CardProduto.valor * this.state.valorContador

    return ValorTotal
  }

  

  render() {
    return (
      <div>
      <ProdutoCarrinho>

      <div className="tabela-produtos">

      <div className="Imagem">{this.props.CardProduto.foto}</div>

      <div className="Descricao">
      <p>{this.props.CardProduto.item}</p>
      <p>{this.props.CardProduto.valor}</p><p>
      <button className="BotaoContador" type="button" onClick={this.onClickSubtrai}> - </button>  
      {this.state.valorContador} <button className="BotaoContador" onClick={this.onClickSoma}>+</button> </p>
      </div>
        </div>
        
    <div className="total-compra">
          <h2>R${this.ValorTotal()},00</h2>
          <button 
        onClick={() => this.props.onRemoveProductFromCart(this.props.cartItem.id)}
      >
        <img className="IconeExcluir" src="https://icons.iconarchive.com/icons/custom-icon-design/mono-general-4/24/trash-icon.png"/>
      </button> </div>
    
        </ProdutoCarrinho>
        </div>
    
    );
  }
}

export default ItemCarrinho;