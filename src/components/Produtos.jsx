import React from "react";
import CardProduto from "./CardProduto";
import styled from "styled-components";

const ProductGrid = styled.div`
  .products-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
`;

export default function Produtos(props) {
  console.log(props.produtos.map((item) => item.title));

  return (
    <ProductGrid>
      <div className="products-list">
        {props.produtos.map((item) => {
          return (
            <CardProduto
              item={item.title}
              key={item.id}
              valor={item.price}
              foto={item.image}
            />
          );
        })}
      </div>
    </ProductGrid>
  );
}
