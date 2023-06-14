import styles from "./Card.module.css";
import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Card = ({ id, name, img, continent }) => {
  return (
    <>
      <NavLink className={styles.navlink} to={`/detail/${id}`}>
        <div className={styles.card}>
          <img
            className={styles.cardImg}
            src={img}
            alt={`bandera de ${name}`}
          />
          <h2 className={styles.cardName}>{name}</h2>
          <h3 className={styles.cardContinent}>{continent}</h3>
        </div>
      </NavLink>
    </>
  );
};

export default Card;
