import React from "react";
import { FilterStyle } from "./styles/styles";

export default function Filtro() {
  return (
    <FilterStyle>
    <div className="filter-container">
        <h2>Filtros</h2>
        <p>Valor máximo:</p>
        <input type="text" placeholder="0" />
        <p>Valor mínimo:</p>
        <input type="value" placeholder="0"/>
        <button>Aplicar filtros</button>
    </div>
    </FilterStyle>
  );
}
