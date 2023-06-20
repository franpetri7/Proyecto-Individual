import { useEffect, useState } from "react";
import Card from "../Card/Card";
import style from "./CardsContainer.module.css";
import { useDispatch, useSelector } from "react-redux";
import { SearchBar } from "../SearchBar/SearchBar";
import {
  continentFilter,
  activityFilter,
  orderByName,
  orderByPopulation,
  getCountryByName,
} from "../../redux/actions";

const CardsContainer = () => {
  const countriesAll = useSelector((state) => state.countries);
  const activities = useSelector((state) => state.activities);
  const countriesFilter = useSelector((state) => state.filteredCountries);
  // Estado de countries
  const [countries, setCountries] = useState([]);
  // Estado paginado
  const ItemsPorPag = 10;
  const [PagPresente, setPagPresente] = useState(1);

  // Calcular el índice del primer y último país en la página actual
  const UltimoPais = PagPresente * ItemsPorPag;
  const PrimerPais = UltimoPais - ItemsPorPag;
  const viewCountries = countries.slice(PrimerPais, UltimoPais);

  useEffect(() => {
    setCountries(countriesAll);
  }, [countriesAll]);

  useEffect(() => {
    setCountries(countriesFilter);
    setPagPresente(1);
  }, [countriesFilter]);

  const dispatch = useDispatch();

  // Cambiar de página
  const AnteriorPag = () => {
    setPagPresente((prevPage) => prevPage - 1);
  };

  const ProximaPag = () => {
    setPagPresente((prevPage) => prevPage + 1);
  };

  const filterByContinent = (e) => {
    dispatch(continentFilter(e.target.value));

    if (e.target.value === "All") {
      setCountries([...countries]);
    } else {
      setCountries([...countriesFilter]);
    }
  };
  const orderName = (e) => {
    dispatch(orderByName(e.target.value));
  };

  const orderPopulation = (e) => {
    dispatch(orderByPopulation(e.target.value));
  };

  const filterByActivity = (e) => {
    const selectedActivity = e.target.value;
    dispatch(activityFilter(selectedActivity));

    if (selectedActivity === "All") {
      setCountries([...countriesAll]);
    } else {
      const filteredCountries = countriesAll.filter((country) =>
        country.Activities.some(
          (activity) => activity.name === selectedActivity
        )
      );
      setCountries([...filteredCountries]);
    }
  };

  let NewActivities;

  if (Array.isArray(activities)) {
    NewActivities = activities.filter(
      (obj, index, arr) => index === arr.findIndex((t) => t.name === obj.name)
    );
  }

  const searchCountry = (name) => {
    dispatch(getCountryByName(name));
    setCountries([...countriesFilter]);
  };

  return (
    <>
      <div className={style.filtersContainer}>
        <div className={style.searchBar}>
          <SearchBar searchCountry={searchCountry} />
        </div>
        <div className={style.filters}>
          <select className={style.selects} onChange={filterByContinent}>
            <option value="" hidden>
              Continent
            </option>
            <option value="All">All</option>
            <option value="Africa">Africa</option>
            <option value="North America">North America</option>
            <option value="South America">South America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>

          <select className={style.selects} onChange={orderName}>
            <option value="" hidden>
              Order
            </option>
            <option value="Ascendente">A - Z</option>
            <option value="Descendente">Z - A</option>
          </select>

          <select className={style.selects} onChange={orderPopulation}>
            <option value="" hidden>
              Population
            </option>
            <option value="Ascendente">More population</option>
            <option value="Descendente">Less population</option>
          </select>

          <select
            className={style.selects}
            name="Activity"
            onChange={filterByActivity}
          >
            <option value="" hidden>
              Activity
            </option>
            <option value="All">All</option>

            {Array.isArray(NewActivities) ? (
              NewActivities.map((activity) => {
                return (
                  <option key={activity.id} value={activity.name}>
                    {activity.name}
                  </option>
                );
              })
            ) : (
              <option value="" disabled>
                Create a new activity
              </option>
            )}
          </select>
        </div>
      </div>

      <div className={style.container}>
        {/* Card */}
        {viewCountries.map((country) => (
          <Card
            key={country.id}
            id={country.id}
            name={country.name}
            continent={country.continent}
            img={country.img}
          />
        ))}

        {/* Paginación */}
        <div className={style.pagination}>
          {/* Botón de retroceso */}
          <button
            onClick={AnteriorPag}
            disabled={PagPresente === 1}
            className={style.paginationbutton}
          >
            Retroceder
          </button>
          {/* Número de página actual */}
          <span className={style.pageNumber}>{PagPresente}</span>
          {/* Botón de avance */}
          <button
            onClick={ProximaPag}
            disabled={PagPresente === Math.ceil(countries.length / ItemsPorPag)}
            className={style.paginationButton}
          >
            Avanzar
          </button>
        </div>
      </div>
    </>
  );
};

export default CardsContainer;
