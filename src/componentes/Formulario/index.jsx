import React, { useState } from 'react'
import { CampoTexto } from '../CampoTexto'
import ListaSuspenza from '../ListaSuspenza';
import "./Formulario.css"
import Botao from '../Botao/Botao';

const Formulario = (props) => {
    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        ' Inovação e Gestão'
        ]
  
    const [nome, setNome] = useState("")    
    const [cargo, setCargo] = useState("")    
    const [imagen, setImagen] = useState("")    
    const [time, setTime] = useState("")

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log("Form foi submetido =>", nome, cargo, imagen)
      /*  props.aoColaboradorCadastro({
            nome: nome,
            cargo: cargo,
            imagen: imagen,
            time: time
        })
        setNome("")
        setCargo("")
        setImagen("")
        setTime("")
    */}    

//onSubmit={aoSalvar}
  return (
    <section className='formulario'>
        <form >  
         <h1>Prencha os dados para criar o card do colaborador</h1>           
         <CampoTexto 
         obrigatorio={true} 
         label="Nome" 
         placeholder="Digite seu nome"
         valor={nome}
         aoAlterado={valor => setNome(valor)}
         />
         <CampoTexto 
         obrigatorio={true} 
         label="Cargo" 
         placeholder="Digite seu cargo"
         valor={cargo}
         aoAlterado={valor => setCargo(valor)}
         />
         <CampoTexto 
         label="Imagen" 
         placeholder="Digite o endereco de sua imagen"
         valor={imagen}
         aoAlterado={valor => setImagen(valor)}
         />    
         <ListaSuspenza 
         obrigatorio={true} 
         label="Time"
         valor={time} 
         items={times}
         aoAlterado={valor => setTime(valor)}/> 
         <Botao>
            Criar Card
         </Botao>  
        </form>
    </section>
    )
}
export default Formulario;
//itens={props.times}