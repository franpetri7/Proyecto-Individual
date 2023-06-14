import {
  GET_COUNTRIES,
  GET_COUNTRY,
  GET_ACTIVITIES,
  GET_COUNTRY_BY_NAME,
  CLEAR_DETAIL,
  BY_CONTINENT,
  // BY_ACTIVITY,
  BY_NAME,
  BY_POPULATION,
} from "./action-types";

const initialState = {
  countries: [],
  filteredCountries: [],
  activities: [],
  detailCountry: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return { ...state, countries: action.payload };

    case GET_COUNTRY:
      return {
        ...state,
        detailCountry: action.payload,
      };

    case CLEAR_DETAIL:
      return {
        ...state,
        detailCountry: action.payload,
      };
    case GET_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
      };
    case GET_COUNTRY_BY_NAME:
      return {
        ...state,
        filteredCountries: action.payload,
      };

    case BY_NAME:
      if (!state.filteredCountries.length) {
        let copiedCountries = [...state.countries];
        let orderByName;

        if (action.payload === "Ascendente") {
          orderByName = copiedCountries.sort((a, b) => {
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            return 0;
          });
        }
        if (action.payload === "Descendente") {
          orderByName = copiedCountries.sort((a, b) => {
            if (a.name < b.name) {
              return 1;
            }
            if (a.name > b.name) {
              return -1;
            }
            return 0;
          });
        }
        return {
          ...state,
          countries: orderByName,
        };
      } else {
        let copiedCountries = [...state.filteredCountries];
        let orderByName;

        if (action.payload === "Ascendente") {
          orderByName = copiedCountries.sort((a, b) => {
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            return 0;
          });
        }
        if (action.payload === "Descendente") {
          orderByName = copiedCountries.sort((a, b) => {
            if (a.name < b.name) {
              return 1;
            }
            if (a.name > b.name) {
              return -1;
            }
            return 0;
          });
        }
        return {
          ...state,
          filteredCountries: orderByName,
        };
      }

    case BY_CONTINENT:
      if (action.payload === "All") {
        return {
          ...state,
          filteredCountries: [...state.countries],
        };
      }
      // eslint-disable-next-line no-case-declarations
      let filter = state.countries.filter(
        (country) => country.continent === action.payload
      );
      return {
        ...state,
        filteredCountries: filter,
      };

    case BY_POPULATION:
      if (!state.filteredCountries.length) {
        let copiedCountries = [...state.countries];
        let orderByPop;

        if (action.payload === "Descendente") {
          orderByPop = copiedCountries.sort((a, b) => {
            if (a.population < b.population) {
              return -1;
            }
            if (a.population > b.population) {
              return 1;
            }
            return 0;
          });
        }
        if (action.payload === "Ascendente") {
          orderByPop = copiedCountries.sort((a, b) => {
            if (a.population < b.population) {
              return 1;
            }
            if (a.population > b.population) {
              return -1;
            }
            return 0;
          });
        }
        return {
          ...state,
          countries: orderByPop,
        };
      } else {
        let copiedCountries = [...state.filteredCountries];
        let orderByPop;

        if (action.payload === "Descendente") {
          orderByPop = copiedCountries.sort((a, b) => {
            if (a.population < b.population) {
              return -1;
            }
            if (a.population > b.population) {
              return 1;
            }
            return 0;
          });
        }
        if (action.payload === "Ascendente") {
          orderByPop = copiedCountries.sort((a, b) => {
            if (a.population < b.population) {
              return 1;
            }
            if (a.population > b.population) {
              return -1;
            }
            return 0;
          });
        }
        return {
          ...state,
          filteredCountries: orderByPop,
        };
      }

    // case BY_ACTIVITY:
    //   let filterActivity;

    //   if (action.payload === "All") {
    //     if (state.countries.some((country) => country.Activities.length > 0)) {
    //       // Si hay países con actividades, se filtran los países que tienen actividades
    //       filterActivity = state.countries.filter(
    //         (country) => country.Activities.length > 0
    //       );
    //     } else {
    //       // Si no hay países con actividades, no se muestra ningún país
    //       filterActivity = [];
    //     }
    //   } else {
    //     // Se filtran los países que tienen la actividad seleccionada
    //     filterActivity = state.countries.filter((country) =>
    //       country.Activities.some(
    //         (activity) => activity.Nombre === action.payload
    //       )
    //     );
    //   }

    //   return {
    //     ...state,
    //     filteredCountries: filterActivity,
    //   };

    default:
      return { ...state };
  }
};

export default rootReducer;
