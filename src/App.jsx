import { useState } from "react";

export const App = ({numero})=>{
  const [valor,setValor] = useState(numero);

  const contador = ()=>{
    setValor(c=>c+1)

  }
  return <>
  <h2>El valor del contador es {valor}</h2>
  <button onClick={()=>{
  contador();
  }}>Incrementa contador + 1</button>
  </>
}
