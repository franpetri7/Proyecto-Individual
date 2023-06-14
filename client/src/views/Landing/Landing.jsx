import { NavLink } from "react-router-dom";
import styles from "./Landing.module.css";
import avion from "../../assets/avion.png";

const Landing = () => {
  return (
    <>
      <div className={styles.landing}>
        <div>
          <h1 className={styles.title}>Empieza tu Viaje ..</h1>
          <span></span>
          <NavLink to={"/home"}>
            <button className={styles.button}>
              <img className={styles.avion} src={avion} alt="" />
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Landing;
