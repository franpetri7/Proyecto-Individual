const { Country, Activity } = require("../db.js");
const axios = require("axios");
const { loadDb } = require("../loadDb");

const getDbInfo = async () => {
  return await Country.findAll({
    include: {
      model: Activity,
      attributes: ["name", "difficulty", "duration", "season"],
      through: {
        attributes: [],
      },
    },
  });
};

const getAllCountries = async () => {
  const dbInfo = await getDbInfo();
  if (!dbInfo.length) {
    await loadDb();
    return await getDbInfo();
  }
  return dbInfo;
};

const getCountries = async (req, res) => {
  let countries = await getAllCountries();
  try {
    countries.length
      ? res.status(200).json(countries)
      : res.status(404).send("Not found... ):");
  } catch (error) {
    res.status(500).send(error);
  }
};

const getCountryById = async (req, res) => {
  const id = req.params.idPais.toUpperCase();
  const countries = await getAllCountries();
  if (id) {
    const country = countries.filter((count) => count.id === id);
    country.length
      ? res.status(200).json(country[0])
      : res.status(404).send("Not Found...");
  }
};

const getCountryByName = async (req, res) => {
  try {
    const name = req.query.name;
    const countries = await getAllCountries();

    if (name) {
      const matchingCountries = countries.filter((country) =>
        country.name.toLowerCase().includes(name.toLowerCase())
      );

      if (matchingCountries.length > 0) {
        res.status(200).json(matchingCountries);
      } else {
        res.status(404).send("No se encontraron países");
      }
    } else {
      res.status(400).send("Falta el parámetro de nombre en la consulta");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener los países" });
  }
};

module.exports = {
  getCountries,
  getCountryById,
  getCountryByName,
};
