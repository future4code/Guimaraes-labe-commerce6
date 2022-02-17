import React from "react";
import CardProduto from "./CardProduto";
import styled from "styled-components";

const ProdContainer = styled.div`
  padding: 15px;

  .title {
    margin-bottom: 15px;
    text-align: center;
  }

  .products-list {
    padding: 15px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
  }
`;

export default function Produtos(props) {
  console.log(props.produtos.map((item) => item.title));

  return (
    <ProdContainer>
      
        <div className="title">
          <h1>Lista de Produtos</h1>
        </div>
        <div className="products-list">
        {props.produtos.map((item) => {
            return (
            <CardProduto
              item = {item.title}
              key = {item.id}
              valor = {item.price}
            />

            )
          })
        }
        </div>
    </ProdContainer>
  );
}
