import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getCountry } from "../../redux/actions";
import { clearDetail } from "../../redux/actions";
import styles from "./Detail.module.css";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const country = useSelector((state) => state.detailCountry);

  useEffect(() => {
    dispatch(getCountry(id));
    return () => {
      dispatch(clearDetail());
    };
  }, [dispatch, id]);
  return (
    <div className={styles.container}>
      <div className={styles.detailContainer}>
        <div className={styles.information}>
          <img className={styles.flagImg} src={country?.img} alt="flag" />
          <h3>ID: {country?.id}</h3>
          <h3>Nombre: {country?.name}</h3>
          <h3>Continente: {country?.continent}</h3>
          <h3>Capital: {country?.capital}</h3>
          {country.subregion && <h3>Subregión: {country.subregion}</h3>}
          {country.area && <h3>Área: {country.area} Km²</h3>}
          <h3>Población: {country?.population}</h3>
        </div>

        <div className={styles.actContainer}>
          <h2>Actividades</h2>
          <div className={styles.cardsContainer}>
            {country.Activities?.length ? (
              country.Activities.map((activity) => {
                return (
                  <div className={styles.activities} key={activity.id}>
                    <h3 key={activity.name}>{activity.name.toUpperCase()}</h3>
                    <p>Dificultad: {activity.difficulty}</p>
                    <p>Duracion: {activity.duration} Horas</p>
                    <p>Temporada: {activity.season}</p>
                  </div>
                );
              })
            ) : (
              <div>
                <h2>No hay actividades</h2>
                <NavLink to="/form">
                  <button className={styles.createBtn}>Creala!</button>
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>

      <NavLink to="/home">
        <button className={styles.homeBtn}>Back to Home</button>
      </NavLink>
    </div>
  );
};

export default Detail;
