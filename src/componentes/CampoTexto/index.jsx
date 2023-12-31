 import React, { useState } from 'react'
 import "./CampoTexto.css"

 export const CampoTexto = (props) => {
  //cuando yo quiero alterar ese valor voy a llamar esta funcion
  //cuando renderizamos la pagina mi estado muda 
  //entonces por mas que definimos un valor 
  //en la renderizacion podemos cambiar el valor
  //a diferencia de cuando asignamos un valor definido
  //en mi input que ahi queda estatico
  //exepto que utilizemos comillas vacias
  //const [valor, setValor] = useState("");  

  /**si mi estado fuera alterado
   * mi componente es renderizado nuevamente
   **/

  const placeholderModificada = `${props.placeholder}...`

  //let valor = ""
  /*setValor(evento.target.value);
    console.log(valor);
   */

  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value);
  }

  return (
     <div className='campo-texto'>
      <label>{props.label}</label>
      <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada}/>
     </div>
   )
 }
 /**placeholder='Digite o seu nome' */