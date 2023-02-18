import React from "react";
import { useNavigate } from "react-router-dom";
import { logOut } from "../firebase";
import styles from "../style/Wall.module.css";

function Wall() {
  const navigate = useNavigate();
  const handlesSignOut = async () => {
    await logOut();
    navigate("/");
  };
  return (
    <div>
      <body>
        <img
          className={styles.carHead}
          src="https://i.postimg.cc/7Zx1xKfD/Encabezado-Recortado.png"
          alt="carro viajando"
        />
        <h2>wall</h2>
        <button className={styles.btnLogOut} onClick={handlesSignOut}>Regresar al Inicio</button>
      </body>
    </div>
  );
}

export default Wall;
