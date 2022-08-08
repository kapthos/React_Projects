import { useState } from "react";
import Inicial from "./Components/Inicial";

function App() {

  const [primeiroValor, setPrimeiroValor] = useState(0)
  const [segundoValor, setSegundoValor] = useState(0)
  const [simbolo, setSimbolo] = useState("")
  const [mostrandoPrimeiroValor, setmostrandoPrimeiroValor] = useState(true)
  const [mostrandoSegundoValor, setMostrandoSegundoValor] = useState(false)
  const [resultado, setResultado] = useState(0)

  const handleValores = (numero) => {
    if (simbolo === "") {
      setPrimeiroValor(parseFloat(primeiroValor + numero))
    } else {
      setSegundoValor(parseFloat(segundoValor + numero))
    }
  }

  const handleReset = () => {
    setPrimeiroValor(0)
    setSegundoValor(0)
    setSimbolo("")
    setResultado(0)
  }

  const handleDisplay = () => {
    if (mostrandoPrimeiroValor && !mostrandoSegundoValor && resultado === 0) {
      return primeiroValor
    } else if (!mostrandoPrimeiroValor && mostrandoSegundoValor && resultado === 0) {
      return segundoValor
    } else if (resultado !== 0) {
      return resultado
    }
  }

  const handleOperacoes = (operacao) => {
    switch (operacao) {
      case "x":
        return (
          setSimbolo("x"),
          setmostrandoPrimeiroValor(false),
          setMostrandoSegundoValor(true)
        )
      case "/":
        return (
          setSimbolo("/"),
          setmostrandoPrimeiroValor(false),
          setMostrandoSegundoValor(true)
        )
      case "-":
        return (
          setSimbolo("-"),
          setmostrandoPrimeiroValor(false),
          setMostrandoSegundoValor(true)
        )
      case "+":
        return (
          setSimbolo("/"),
          setmostrandoPrimeiroValor(false),
          setMostrandoSegundoValor(true)
        )
      default:
        console.log("nada")
        break
    }
  }

  const handleResult = () => {
    if(simbolo === "x") {
      return setResultado(primeiroValor * segundoValor) 
    } else if (simbolo === "/") {
      return setResultado(primeiroValor / segundoValor)
    } else if (simbolo === "+") {
      return setResultado(primeiroValor + segundoValor)
    } else if (simbolo === "-") {
      return setResultado(primeiroValor - segundoValor)
    } else {
      alert("Termine as operações")
    }
  }

  return (
    <div className="App">
      <Inicial handleValores={handleValores} handleReset={handleReset} handleOperacoes={handleOperacoes} handleDisplay={handleDisplay} handleResult={handleResult}/>
    </div>
  );
}

export default App;