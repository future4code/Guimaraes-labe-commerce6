import React from "react";
import CardProduto from "./CardProduto";
import { Grid } from "@mui/material";

export default function Produtos(props) {
  console.log(props.produtos.map((item) => item.title));

  return (
    <div className="products-list">
      {props.produtos.map((item) => {
        return (
          <Grid item><CardProduto item={item.title} key={item.id} valor={item.price} /></Grid>
        );
      })}
    </div>
  );
}
