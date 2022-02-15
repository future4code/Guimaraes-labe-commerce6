import React from "react";
import styled from "styled-components";

const CarrinhodeCompras = styled.div``
const BotaoFechar = styled.div``
const TableProdutosCarro = styled.div``
const Quantidade = styled.div``
const Button = styled.div``
const InputNum = styled.div``
const SubTotal = styled.div``
const BotaoRemover = styled.div``
const TotalCompra = styled.div``
const TituloTotal = styled.div``
const TotalValor = styled.div``
const ButtonFinalizarCompra = styled.div``

class Carrinho extends React.Component {

  render() {
    return (
    <CarrinhodeCompras>
      <h2>Meus Pedidos</h2>
      <BotaoFechar> X </BotaoFechar>

      <TableProdutosCarro>
        <tr>
          <td>PRODUTO</td>
          <td>SUBTOTAL</td>
        </tr>
        <tr>
          <td>
            <p> produtoNome="" produtoImagem="" produtoValor ="" </p>
            <Quantidade>
              <Button type="button" id="menos" onClick="">
                -
              </Button>
              <InputNum type="number" name="numero" />
              <Button type="button" id="mais" onClick="">
                +
              </Button>
            </Quantidade>
          </td>

          <td>
            <SubTotal>
              <p>// produtoValor + quantidade</p>
              <BotaoRemover>
                <img src="https://icons.iconarchive.com/icons/custom-icon-design/mono-general-4/24/trash-icon.png" />
              </BotaoRemover>
            </SubTotal>
          </td>
        </tr>
      </TableProdutosCarro>

      <TotalCompra>
        <TituloTotal>TOTAL</TituloTotal>
        <TotalValor> R$,00 </TotalValor>
      </TotalCompra>

      <ButtonFinalizarCompra>Finalizar Compra</ButtonFinalizarCompra>
    </CarrinhodeCompras>
    )
  }
}

export default Carrinho;
