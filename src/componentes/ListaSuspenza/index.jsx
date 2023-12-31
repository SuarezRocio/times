import React from 'react'
import "./ListaSuspenza.css"

const ListaSuspenza = (props) => {

  
    return (
    <div className='lista-suspensa'>
        <label>{props.label}</label>
    <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.obrigatorio} value={props.value}>
        {/*para cada item retornamos una option*/}
        {props.items.map(item => {
           return <option key={item}>{item}</option>
        }
        )}
    </select>
    </div>
  )
}
export default ListaSuspenza;
