import React, {useEffect, useState} from "react";
import Notes from "./Notes";
import {db} from '../firebase';
import styles from "../style/Wall.module.css";
import { 
    addDoc,
    collection,
    query,
    onSnapshot,
 } from "firebase/firestore";

const TitleNotes = () => {

  const [notes, setNotes] = useState([])

    // función para guardar el objeto en firebase
    const addOrEdit = async (algoObject) => {
       await addDoc(collection(db, 'notes'), {
        algoObject,
       });
       console.log('nueva tarea agregada')
    }
    const onGetNotes = (callback) =>{
      const queryNote = query(collection(db,'notes'));
      onSnapshot(queryNote, callback)
    }
    // getNotes hace una petición a firebase    
const getNotes = async() => {
  onGetNotes((querySnapshot) => {
    const docs = [];
    querySnapshot.forEach(doc => {
      // console.log(doc.data());
      // console.log(doc.id);
      docs.push({...doc.data(), id:doc.id});
    })
    setNotes(docs);
  })   
      
    }
// useEffect recibe un arreglo con los datos que van cambiando, si cambia, esto se ejecuta
    useEffect(()=>{
      getNotes();
        console.log('obteniendo datos')
    }, []); 

  return (
    <div>
      <Notes addOrEdit = {addOrEdit}/>
      <div className={styles.divConteinerNotes}>
        {notes.map(note => (
           <div className={styles.divNotes}>
            <h3>{note.algoObject.title}</h3>
            <p>{note.algoObject.content}</p>
            </div>
            ))}
      </div>
    </div>
  );
};

export default TitleNotes;
