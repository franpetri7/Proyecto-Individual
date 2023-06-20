import axios from "axios";

import {
  GET_COUNTRIES,
  GET_COUNTRY,
  GET_ACTIVITIES,
  GET_COUNTRY_BY_NAME,
  CLEAR_DETAIL,
  BY_CONTINENT,
  BY_ACTIVITY,
  BY_NAME,
  BY_POPULATION,
} from "./action-types";

const endpoint = "http://localhost:3001";

export const getCountries = () => {
  return async function (dispatch) {
    const apiData = await axios.get(endpoint + "/countries");
    const countries = apiData.data;
    dispatch({
      type: GET_COUNTRIES,
      payload: countries,
    });
  };
};

export const getCountry = (id) => {
  return async function (dispatch) {
    const apiData = await axios.get(`${endpoint}/countries/${id}`);
    const country = apiData.data;
    dispatch({
      type: GET_COUNTRY,
      payload: country,
    });
  };
};

export const clearDetail = () => {
  return {
    type: CLEAR_DETAIL,
    payload: [],
  };
};

export const getCountryByName = (name) => {
  return async function (dispatch) {
    const apiData = await axios.get(`${endpoint}/countries/name?name=${name}`);
    const countryName = apiData.data;
    dispatch({
      type: GET_COUNTRY_BY_NAME,
      payload: countryName,
    });
  };
};

export const getAllActivities = () => {
  return async function (dispatch) {
    const apiData = await axios.get(endpoint + "/activities");
    const activities = apiData.data;
    dispatch({
      type: GET_ACTIVITIES,
      payload: activities,
    });
  };
};

export const orderByName = (name) => {
  return {
    type: BY_NAME,
    payload: name,
  };
};

export const continentFilter = (continent) => {
  return {
    type: BY_CONTINENT,
    payload: continent,
  };
};

export const orderByPopulation = (population) => {
  return {
    type: BY_POPULATION,
    payload: population,
  };
};

export const activityFilter = (name) => {
  return {
    type: BY_ACTIVITY,
    payload: name,
  };
};
