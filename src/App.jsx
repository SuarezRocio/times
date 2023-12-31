import { useState } from "react"
import  Banner  from "./componentes/Banner"
import  Formulario  from "./componentes/Formulario"
import Time from "./componentes/Time"
//import { Colaborador } from "./componentes/Colaborador"

function App() {

 const times = [
   {
    nome: 'Programação',
    corPrimaria: "#57C278",
    corSecundaria: "#D9F7E9"
  },
  {
    nome: 'Front-End',
    corPrimaria: "#82CFFA",
    corSecundaria: "#E8F8FF"
  },
  {
    nome: 'Data Science',
    corPrimaria: "#A6D157",
    corSecundaria: "#F0F8E2"
  },
  {
    nome: 'Devops',
    corPrimaria: "#E06B69",
    corSecundaria: "#FDE7E8"
  },
  {
    nome: 'UX e Design',
    corPrimaria: "#DB6EBF",
    corSecundaria: "#FAE9F5"
  },
  
  {
    nome: 'Mobile',
    corPrimaria: "#FFBA05",
    corSecundaria: "#FFF5D9"
  },
  
  {
    nome: 'Inovação e Gestão',
    corPrimaria: "#FF8A29",
    corSecundaria: "#FFEEDF"
  }
 ] 
/**paso un array porque cada ves que un colaborador fuese cadastrado
 * pego un colaborador y lo sumo a mi array */  

const [colaboradores, setColaboradores] = useState([])
const aoNovoColaboradorAdicionado = (colaborador) => {
console.log(colaborador)
//colaboradores.push(colaborador)
setColaboradores([...colaboradores, colaborador])}

  return (
    <div>
      <Banner/>  
      <Formulario times={times
        .map( time => time.nome)} aoColaboradorCadastro={colaborador => aoNovoColaboradorAdicionado(colaborador)}/> 
    {times.map(time => <Time key={time.nome} nome={time.nome} corPrimaria={time.corPrimaria}
  corSecundaria={time.corSecundaria}/>)}
    </div>
     
  )
}

export default App


{ /**{times.map(time => <Time key={time.nome} corPrimaria={time.corPrimaria}
  corSecundaria={time.corSecundaria}     
  />)} */


  /**aoColaboradorCadastro={colaborador => aoNovoColaboradorAdicionado(colaborador)} 
   * colaboradores={colaboradores.filter(colaborador => colaborador.time == time.nome)} */
  /*}
  {/*es en base a la key la renderizacion que el hace
  con mis componentes hijos, se utiliza para controlar la renderizacion
  */}