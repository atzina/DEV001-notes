import React from "react";
import { loginWhithGoogle } from "../firebase";
import App from "../App";
import { useNavigate } from "react-router-dom";
import styles from "../style/Home.module.css";

function Home() {
  const navigate = useNavigate();

  const handleGoogleSignin = async (credentials) => {
    console.log(credentials);
    await loginWhithGoogle();
    navigate("/wall");
  };

  return (
    <div>
      <body>
        <div className={styles.divTitle}>
          <h1 className={styles.title}>Diario de Viaje</h1>
        </div>
        <img
          className={styles.carroviaje}
          src="https://i.postimg.cc/76VTTZbp/home-Sin-Espacios.png"
          alt="carroviaje"
        />
        <div className={styles.login}>
          <h4 className={styles.startText}>inicia sesión con</h4>
          <button className={styles.btnGoggle} onClick={handleGoogleSignin}>
            Google
          </button>
        </div>
      </body>
    </div>
  );
}

export default Home;
