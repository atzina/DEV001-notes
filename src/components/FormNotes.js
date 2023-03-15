import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import React, { useState, useEffect } from "react";
import styles from "../style/Wall.module.css";
// useState para utilizar el estado de un componente

const FormNotes = (props) => {
  // Las siguientes dos constantes son la manera de definir el estado en React
  const initialStateValues = {
    title: '',
    content: '',
  };
  const [values, setValues] = useState(initialStateValues);


  // función que maneje el estado de los inputs (onchange): que cuando cambia el imput traiga el valor inicial y lo intregre con el valor del cambio que se haya hecho en el imput
  const inputChange = (e) => {
    const {name, value} = e.target; // información del evento(no el valor)
    setValues({...values, [name]:value }) // copia los valores de estado inicial con (...) y el imput que esten actualizando copia el valor nuevo tipeado
    //  console.log(e.target.value); target.value para imprimir la información del evento
    
  };

  //submit va recibir la información del evento el envio del formulario
  // aquí el componente Notes, toma el prop llamado addOrEdit  y lo utiliza para renderizar con los valores introducidos en el submit
  const submit = (e) => {  
    e.preventDefault();
    props.addOrEdit(values);
    setValues({...initialStateValues}) // este devuelve el valor inicial para limpiar el formulario luego de enviar.
  };
  //cada vez que cambien los valores yo quiero alterar el estado

  // traemos una nota por su id para poder editarla en el mismo input
  const getNoteById = async (id) => {
    try{
      const thisDoc = await getDoc(doc(db,"notes", id));
      console.log(thisDoc.data().algoObject);    
      setValues({...thisDoc.data().algoObject});
    
    } catch (error){
      console.log(error);
    }
    
  };

 // esto se va renderizar siempre y cuando el id tenga contenido
  useEffect(() => {
    if(props.currentId === ''){
      setValues({...initialStateValues});
    } else {
      getNoteById(props.currentId);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.currentId])

  return (
    <form onSubmit={submit}> 
      <div>
        <input type="text" onChange={inputChange} name="title" value ={values.title} className={styles.inputTitle} placeholder="Título"></input>
      </div>
      <div>
        <textarea onChange={inputChange} name ="content" value={values.content} className={styles.textarea} placeholder="Nota de viaje"></textarea>
      </div>
      <button className={styles.butonAddNote}>{props.currentId === '' ? 'Guardar Nota': 'Actualizar'}</button>
    </form>
  );
};



export default FormNotes;
