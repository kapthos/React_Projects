import React, { useState } from "react";
import PaginaDois from "./Components/PaginaDois";
import PaginaUm from './Components/PaginaUm';
import PaginaTres from './Components/PaginaTres';
import PaginaQuatro from './Components/PaginaQuatro';

function App() {

  const [pagina, setPagina] = useState("um")

  switch (pagina) {
    case "um":
      return <PaginaUm setPagina1={setPagina} />
    case "dois":
      return <PaginaDois setPagina2={setPagina} />
    case "tres":
      return <PaginaTres setPagina3={setPagina} />
    case "quatro":
      return <PaginaQuatro setPagina4={setPagina} />
    default:
      console.log("erro")
      break  
  }
}

export default App;