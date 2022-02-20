
import React from 'react'
import styled from 'styled-components'



const FiltersContainer = styled.div `
width: 90vw;
height: 4vh;
background: rgba(102, 213, 241, 0.678);
box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
padding: 30px;
margin:10px
padding-top:30px;
display: flex;
justify-content: space-between;
`

export function Filters(props) {
   return <FiltersContainer>
      <div><h2> KosmoStore</h2></div>
      <input
         className="Pesquisar"
         placeholder="Pesquisar"
         value={props.query}
         onChange={props.updateQuery}
      />
   

      <input
         className="MinMax"
         type="number"
         placeholder="Preço mínimo"
         value={props.minPrice}
         onChange={props.updateMinPrice}
      />

      <input
         className="MinMax"
         type="number"
         placeholder="Preço máximo"
         value={props.maxPrice}
         onChange={props.updateMaxPrice}
      />


      <select
      classname="Order"
         name="order"
         value={props.order}
         onChange={props.updateOrder}
      >
         <option value={1}>Crescente</option>
         <option value={-1}>Decrescente</option>

      </select>
   </FiltersContainer>

}