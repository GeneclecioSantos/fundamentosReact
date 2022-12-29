import React from "react";

export default function Aleatorio(props) {
  const { min, max } = props;

  const numberAleatorio = parseInt(Math.random() * (max - min) + min);

  console.log(props);
  console.log(numberAleatorio);

  return (
    <div>
      <h2>Valor Aleatório</h2>
      <p>
        <strong>Valor Mínimo: </strong> {min}
      </p>
      <p>
        <strong>Valor Máximo: </strong> {max}
      </p>
      <p>
        <strong>Valor Escolhido: </strong> {numberAleatorio}
      </p>
    </div>
  );
}
