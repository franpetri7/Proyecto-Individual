import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import earth from "../../assets/earth1.gif";

const NavBar = () => {
  return (
    <>
      <div className={styles.Container}>
        <NavLink className={styles.landing} to="/">
          <img src={earth} alt="" />
        </NavLink>
        <div className={styles.mainContainer}>
          <NavLink className={styles.links} to="/home">
            HOME PAGE!
          </NavLink>
          <NavLink className={styles.links} to="/form">
            CREA TU ACTIVIDAD
          </NavLink>
          <NavLink className={styles.links} to="/about">
            ABOUT
          </NavLink>
        </div>
      </div>
    </>
  );
};
export default NavBar;
