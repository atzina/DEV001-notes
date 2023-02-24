import React, { useState } from "react";
import styles from "../style/Wall.module.css";
// useState para utilizar el estado de un componente

const Notes = (props) => {
  // Las siguientes dos constantes son la manera de definir el estado en React
  const initialStateValues = {
    title: '',
    content: ''
  };
  const [values, setValues] = useState(initialStateValues);

  // función que maneje el estado de los inputs (onchange)
  const inputChange = (e) => {
    const {name, value} = e.target;
    setValues({...values, [name]:value}) // copia los valores de estado inicial con (...) y el imput que esten actualizando copia el valor nuevo tipeado
    console.log(e.target.value); //target.value para imprimir la información del evento
    
  };

  //submit va recibir la información del evento el envio del formulario
  const submit = (e) => {
    e.preventDefault();
    props.addOrEdit(values);
    setValues({...initialStateValues}) // este devuelve el valor inicial para limpiar el formulario luego de enviar.
  };
  //cada vez que cambien los valores yo quiero alterar el estado

  return (
    <form onSubmit={submit}> 
      <div>
        <input type="text" onChange={inputChange} name="title" value ={values.title}></input>
      </div>
      <div>
        <textarea onChange={inputChange} name ="content" value={values.content} className={styles.textarea}></textarea>
      </div>
      <button className={styles.butonAddNote}>Guardar Nota de Viaje</button>
    </form>
  );
};


export default Notes;
