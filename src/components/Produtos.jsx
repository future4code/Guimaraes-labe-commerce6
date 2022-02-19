import React from "react";
import CardProduto from "./CardProduto";
import styled from "styled-components";
//import { EventRepeat } from "@mui/icons-material";

const ProductGrid = styled.div`
  .products-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    padding:15px;
  }

  
`;

export default class Produtos extends React.Component {

  state={
    order:1,
  }

  updateOrder=(ev)=>{
    this.setState({order:ev.target.value})
  }

  render(){
 
return (

    <div>
      <div>
        <p>Quantidade: 9</p>
      <label for="sort"> 
        Ordem de Preços:
        <select name="order" value={this.state.order} onChange={this.updateOrder}>
          <option value={1}>Crescente</option>
          <option value={-1}>Decrescente</option>
        </select>
        </label>
        </div>
    <ProductGrid>

      <div className="products-list">
        {this.props.produtos
        .filter(item =>{
          return item.title.toLowerCase().includes(this.props.state.query)
        })
        .filter(item =>{
          return this.props.state.minPrice===""|| item.price >= this.props.state.minPrice
        })
        .filter(item =>{
          return this.props.state.maxPrice===""|| item.price <= this.props.state.maxPrice
        })
        .sort((currentItem, nextItem)=>{
          switch(this.state.order){
             default:
        return this.state.order *(currentItem.price - nextItem.price)}
        })
        .map((item) => {
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
    </div>
  );
}
}
