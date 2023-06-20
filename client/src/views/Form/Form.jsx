import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { validate } from "./validation";
import styles from "./Form.module.css";

const Form = () => {
  const duration = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24,
  ];

  const countriesAll = useSelector((state) => state.countries).sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  const [form, setForm] = useState({
    name: "",
    difficulty: 0,
    duration: 0,
    season: "",
    countries: [],
  });

  useEffect(() => {
    const checkInfo = () => {
      if (
        !form.name ||
        !form.difficulty ||
        !form.duration ||
        !form.season ||
        !form.countries.length
      ) {
        setFormComplete(false);
      } else {
        setFormComplete(true);
      }
    };
    checkInfo();
  }, [form]);

  const [error, setError] = useState({});
  const [formComplete, setFormComplete] = useState(false);
  const [crear, setCrear] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setError(validate({ ...form, [e.target.name]: e.target.value }));
  };

  const countrySel = (e) => {
    if (!form.countries.includes(e.target.value)) {
      setForm({
        ...form,
        countries: [...form.countries, e.target.value],
      });
    }
    setError(validate({ ...form, countries: e.target.value }));
  };

  const handleDelete = (nombre) => {
    setForm({
      ...form,
      countries: form.countries.filter((country) => country !== nombre),
    });
  };

  const clearForm = () => {
    setFormComplete(false);
    setForm({
      name: "",
      difficulty: 0,
      duration: 0,
      season: "",
      countries: [],
    });
  };

  const endpoint = "http://localhost:3001";
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formComplete === true) {
      await axios.post(endpoint + "/activities", form);
      setCrear("La actividad se creo exitosamente");
    }
    clearForm();
  };
  return (
    <>
      <form className={styles.Form} onSubmit={handleSubmit}>
        <div className={styles.input}>
          <h2 className={styles.titulo}>Crea una Actividad</h2>
          <div className={styles.nombre}>
            <label>Nombre</label>
            <input
              className={styles.inputname}
              type="text"
              placeholder="Nombre de la actividad"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
            <span className={styles.span}> {error.name} </span>
          </div>

          <div className={styles.difficulty}>
            <label>Dificultad</label>
            <select
              className={styles.selects}
              name="difficulty"
              value={form.difficulty}
              onChange={handleChange}
            >
              <option value="hidden">1 a 5</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <span className={styles.span}>{error.difficulty}</span>
          </div>

          <div className={styles.duration}>
            <label>Duracion</label>
            <select
              className={styles.selects}
              name="duration"
              value={form.duration}
              onChange={handleChange}
            >
              <option value="">Horas</option>

              {duration.map((hour, i) => (
                <option key={i} value={hour}>
                  {hour}
                </option>
              ))}
            </select>
            <span className={styles.span}>{error.duration}</span>
          </div>

          <div className={styles.season}>
            <label>Temporada</label>
            <select
              className={styles.selects}
              onChange={handleChange}
              value={form.season}
              name="season"
            >
              <option value="">Selecciona una temporada</option>
              <option value="Spring">Primavera</option>
              <option value="Summer">Verano</option>
              <option value="Autumn">Otoño</option>
              <option value="Winter">Invierno</option>
            </select>
            <span className={styles.span}>{error.season}</span>
          </div>

          <div className={styles.country}>
            <div className={styles.listCountries}>
              <label>País</label>
              <select className={styles.selects} onChange={countrySel}>
                <option>Selecciona el pais</option>
                {countriesAll.map((country) => (
                  <option key={country.id} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>
              <span className={styles.span}>{error.countries}</span>
            </div>

            <div className={styles.selectedCountry}>
              {form.countries.map((c, i) => (
                <div key={i}>
                  <span className={styles.countryName}>{c}</span>
                  <button
                    className={styles.deleteButton}
                    onClick={() => handleDelete(c)}
                    type="button"
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.buttons}>
            <button
              className={styles.createButton}
              disabled={!formComplete}
              type="submit"
            >
              Crear
            </button>
            <button onClick={clearForm} className={styles.clearButton}>
              Limpiar
            </button>
          </div>
          <span>{crear}</span>

          <NavLink to="/home">
            <button className={styles.homeButton}>Back to Home</button>
          </NavLink>
        </div>
      </form>
    </>
  );
};
export default Form;
