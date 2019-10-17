import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [palpite, setPalpite] = useState(150);
  const [estado, setEstado] = useState("INICIO");
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);
  const [numeroPalpites, setNumeroPalpites] = useState(1);

  const iniciarJogo = () => {
    setEstado("RODANDO");
    setPalpite(150);
    setMin(0);
    setMax(300);
    setNumeroPalpites(1);
  };

  const maior = () => {
    setMin(palpite);
    setNumeroPalpites(numeroPalpites + 1);
    const proxPalpite = parseInt(palpite + (max - palpite) / 2);
    setPalpite(proxPalpite);
  };

  const menor = () => {
    setMax(palpite);
    setNumeroPalpites(numeroPalpites + 1);
    const proxPalpite = parseInt(palpite - (palpite - min) / 2);
    setPalpite(proxPalpite);
  };

  const acertou = () => {
    setEstado("FIM");
  };

  if (estado === "INICIO") {
    return (
      <div>
        <button onClick={iniciarJogo}>Iniciar Jogo!</button>
      </div>
    );
  } else if (estado === "FIM") {
    return (
      <div>
        <p>Acertei o número com {numeroPalpites} chutes!</p>
        <button onClick={iniciarJogo}>Deseja jogar novamente?</button>
      </div>
    );
  }

  return (
    <div className="App">
      <p>O número é {palpite}?</p>
      <button onClick={menor}>menor!</button>
      <button onClick={acertou}>acertou!</button>
      <button onClick={maior}>maior!</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
