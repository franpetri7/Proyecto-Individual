import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
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
  );
};
export default NavBar;
