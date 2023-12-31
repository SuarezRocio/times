//import { Colaborador } from "../Colaborador";
import "./Time.css";

const Time = (props) => {
  const css = { backgroundColor: props.corSecundaria };
  const textStyle = { textDecoration: `underline ${props.corPrimaria}` };

  return (
  /* si mi colaborador fuese mayor a 0
  muestra los colaboradores si fuese falso
  no va a hacer nada*/  
    <section className="time" style={css}>
      <h3 style={textStyle}>{props.nome}</h3> 
    </section>
  );
};

export default Time;

/**   (props.colaboradores.length > 0) ? <section className="time" style={css}>
      <h3 style={textStyle}>{props.nome}</h3>
      <div className="colaboradores">
        {props.colaboradores.map( colaborador => <Colaborador key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/>)}
      </div>
    </section>
    : ""
 */