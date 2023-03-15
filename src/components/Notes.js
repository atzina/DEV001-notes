import React, { useEffect, useState } from "react";
import FormNotes from "./FormNotes";
import { db } from "../firebase";
import styles from "../style/Wall.module.css";
import {
  addDoc,
  collection,
  query,
  onSnapshot,
  deleteDoc,
  doc,
  setDoc,
} from "firebase/firestore";

const Notes = () => {
  const [notes, setNotes] = useState([]); // Estado vacío cada que getNotes traiga algo lo va a guardar en este arreglo.
  const [currentId, setCurrentId] = useState("");

  // función para guardar el objeto en firebase. El objeto viene definido por el props que en FormNotes tiene como parametro values, es decir lo tipeado por el usuario. 'notes' es el nombre de la colección.
  const addOrEdit = async (algoObject) => {
    if (currentId === "") {
      const date = new Date().toLocaleString();
      await addDoc(collection(db, "notes"), {
        algoObject, date,
      });
     } 
     else {
      const date = new Date().toLocaleString();
      await setDoc(doc(db, "notes", currentId), {
        algoObject, date,
      });
      setCurrentId("");
    }

    console.log("nueva tarea agregada");
  };

  const deleteNote = async (id) => {
    if (window.confirm("¿Estas segura de querer borrar la nota?")) {
      await deleteDoc(doc(db, "notes", id));
      console.log("nota eliminada");
    }
  };

  const onGetNotes = (callback) => {
    const queryNote = query(collection(db, "notes"));
    onSnapshot(queryNote, callback); // onSanpshot realiza actualizaciones en tiempo real de los datos en firebase
  };
  // getNotes hace una petición a firebase
  const getNotes = async () => {
    onGetNotes((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
         // console.log(doc.data());
        // console.log(doc.id);
      
    
        docs.push({ ...doc.data(), id: doc.id });
      });
      setNotes(docs); // se establece el estado
    });
  };
  // useEffect recibe un arreglo con los datos que van cambiando, si cambia, esto se ejecuta. Cuando cambie el componente haga una peticón a firebase
  useEffect(() => {
    getNotes();
    console.log("obteniendo datos");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // el efecto secundario se ejecutará después de cada renderizado cuando esta vacío

  // finalmente se renderiza Notes() y el contenido de la colección que tipea en usuario para construir su nota
  return (
    <div>
      <FormNotes {...{ addOrEdit, currentId, notes }} />
      <div className={styles.divConteinerNotes}>
        {notes.length>0 && notes.map((note) => (
          <div className={styles.divNotes} key={note.id}>
            <h3>{note.algoObject.title}</h3>
            <p>{note.date}</p>
            <p>{note.algoObject.content}</p>
            <button onClick={() => deleteNote(note.id)}>Borrar Nota</button>
            <button onClick={() => setCurrentId(note.id)}>Editar</button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Notes;
