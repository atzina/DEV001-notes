import React from "react";
import { loginWhithGoogle } from "../firebase";
import { useNavigate } from "react-router-dom";
import styles from "../style/Home.module.css";
import image from "../images/home-Sin-Espacios.png"

function Home() {
  const navigate = useNavigate();

  const handleGoogleSignin = async (credentials) => {
    console.log(credentials);
    await loginWhithGoogle();
    navigate("/wall");
  };

  return (
    <div className={styles.conteiner}>
      
        <div className={styles.divTitle}>
          <h1 className={styles.title}>Diario de Viaje</h1>
        </div>
        <img
          className={styles.carroviaje}
          src={image}
          alt="carroviaje"
        />
        <div className={styles.login}>
          <h4 className={styles.startText}>inicia sesión con</h4>
          <button className={styles.btnGoggle} onClick={handleGoogleSignin}>
            Google
          </button>
        </div>
    
    </div>
  );
}

export default Home;
