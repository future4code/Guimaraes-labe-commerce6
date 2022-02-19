import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    display: flex;
    justify-content: center;
    align-items: end;
    width: 250px;
    height: 350px;
    border: none;
    box-shadow: 2px 2px 2px grey;
    border-radius:5px;
    padding: 10px;
    background: rgba(234, 234, 245, 0.678);

    .produto1 {
      text-align: center;
      margin-bottom: 10px;
    }

    .produto1 button {
      
    width: 12vw;
    height: 6vh;
    background: #66d5f1;
    color: #414141;
    border: none;
    font-size: 15px;
    margin: 10px;
    }

    .produto1 button:hover {
      background: #414141;
      color: #66d5f1;
    }
    .produto1 img {
     max-width: 230px;
     max-height: 200px;
     border-radius:5px;

    }
`

export default function CardProduto(props) {
  return (
    <div className='container-produtos'>
        <Card>
        <div className="produto1">
           <img src={props.foto} alt="imagem"/> 
            <p>{props.item}</p>
            <p>R${props.valor}</p><br/>
            <button onClick={() => this.props.onAddProdutoCarrinho(props.key)}>Comprar</button>
        </div>
        </Card>      
    </div>
  )
}
