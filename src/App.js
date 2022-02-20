import React, { Component } from "react"
import produtosList from "./data/produtos.json"
import { Card } from "./components/Card";
import { Filters } from "./components/Filters";
import styled from 'styled-components'
import "./App.css"

const ListContainer = styled.div`
      display:grid;
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 18px;
      grid-row-gap:18px;
      width: 100%;
      margin-bottom: 15px;
      text-align: center;
      padding: 15px; `



export class App extends Component {


   state = {
      produtos: produtosList,
      query: "",
      minPrice: "",
      maxPrice: "",
      sortingParameter: "title",
      order: 1
   }

   updateQuery = (ev) => {
      this.setState({
         query: ev.target.value
      })
   }

   updateMinPrice = (ev) => {
      this.setState({
         minPrice: ev.target.value
      })
   }

   updateMaxPrice = (ev) => {
      this.setState({
         maxPrice: ev.target.value
      })
   }



   updateOrder = (ev) => {
      this.setState({
         order: ev.target.value
      })
   }

   render() {


      return <>
        

         <Filters
            query={this.state.query}
            updateQuery={this.updateQuery}
            updateMinPrice={this.updateMinPrice}
            updateMaxPrice={this.updateMaxPrice}
            updateSortingParameter={this.updateSortingParameter}
            updateOrder={this.updateOrder}
            minPrice={this.state.minPrice}
            maxPrice={this.state.maxPrice}
            sortingParameter={this.state.sortingParameter}
            order={this.state.order}

         />
       
         <ListContainer>
            {this.state.produtos
               .filter(produtos => {
                  return produtos.title.toLowerCase().includes(this.state.query.toLowerCase()) 
               })
               .filter(produtos => {
                  return this.state.minPrice === "" || produtos.price >= this.state.minPrice
               })
               .filter(produtos => {
                  return this.state.maxPrice === "" || produtos.price <= this.state.maxPrice
               })
               .sort((currentProdutos, nextProdutos) => {
                  switch (this.state.sortingParameter) {
                     case "title":
                        return this.state.order * currentProdutos.title.localeCompare(nextProdutos.title)
                     case "dueDate":
                        return this.state.order * (new Date(currentProdutos.dueDate).getTime() - new Date(nextProdutos.dueDate).getTime())
                     default:
                        return this.state.order * (currentProdutos.price - nextProdutos.price)
                  }
               })
               .map(produtos => {
                  return <Card key={produtos.id} job={produtos} />
               })}
         </ListContainer>
      </>
   }
}