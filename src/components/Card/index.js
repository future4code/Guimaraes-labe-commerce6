import React from 'react'
import styled from 'styled-components'



const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: end;
    width: 250px;
    height: 400px;
    border: none;
    box-shadow: 2px 2px 2px grey;
    border-radius:5px;
    padding: 10px;
    background: rgba(234, 234, 245, 0.678);
    `

const ImgProduto = styled.img`
max-width:250px;
max-height:220px;
`



export function Card(props) {
   return <CardContainer>
      <div className="produto1">
       <ImgProduto src={props.job.image} alt="imagem"/> 
      <h2 title={props.job.title}>
        <strong>{props.job.title} </strong>
      </h2>
         <p> R$ {props.job.price.toFixed(2).replace(".", ",")}</p>
         <button onClick={() => this.props.onAddProdutoCarrinho(props.key)}>Comprar</button>
         </div>
   </CardContainer>
}