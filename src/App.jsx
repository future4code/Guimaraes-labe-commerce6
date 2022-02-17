import React from "react";
import dados from "./data/data.json";
import Header from "./components/Header";
import Carrinho from "./components/Carrinho";
import Produtos from "./components/Produtos";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Carrinho />
        <Produtos produtos={dados} />
      </main>
    </div>
  );
}

export default App;
