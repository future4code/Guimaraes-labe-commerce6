import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    display: flex;
    justify-content: center;
    align-items: end;
    width: 250px;
    height: 250px;
    border: 1px solid grey;
    box-shadow: 2px 2px 2px grey;
    border-radius: 10px;
    padding: 10px;

    .produto1 {
      text-align: center;
      margin-bottom: 10px;
    }

    .produto1 button {
      padding: 3px;
    }
`

export default function CardProduto(props) {
  return (
    <div className='container-produtos'>
        <Card>
        <div className="produto1">
            <p>{props.item}</p>
            <p>R${props.valor}</p><br/>
            <button>Adicionar ao Carrinho</button>
        </div>
        </Card>      
    </div>
  )
}
