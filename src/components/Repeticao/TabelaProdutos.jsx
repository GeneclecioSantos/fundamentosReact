import React from "react";
import "./TabelaProduto.css";
import produtos from "../../data/produtos";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  console.log(produtos);

  const Produtos = produtos.map((produto, i) => {
    return (
      <tr key={produto.id} className={i % 2 === 0 ? "Par" : ""}>
        <td>{produto.id}</td>
        <td>{produto.nome}</td>
        <td>R$ {produto.valor.toFixed(2).replace(".", ",")}</td>
      </tr>
    );
  });

  return (
    <div className="Container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NOME</th>
            <th>VALOR</th>
          </tr>
        </thead>
        <tbody>{Produtos}</tbody>
      </table>
    </div>
  );
};
