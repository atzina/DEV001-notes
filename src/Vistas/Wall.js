import React from "react";
import { useNavigate } from "react-router-dom";
import { logOut } from "../firebase";
import styles from "../style/Wall.module.css";
import Notes from "../components/Notes";

function Wall() {
  const navigate = useNavigate();
  const handlesSignOut = async () => {
    await logOut();
    navigate("/");
  };
  return (
    <div>
      <header>
      <img
          className={styles.carHead}
          src="https://i.postimg.cc/7Zx1xKfD/Encabezado-Recortado.png"
          alt="carro viajando"
        />
      </header>
      <nav>
        <button className={styles.btnLogOut} onClick={handlesSignOut}>
          Regresar al Inicio
        </button>
      </nav>
      <main>
       
        <Notes />
      </main>
    </div>
  );
}

export default Wall;
