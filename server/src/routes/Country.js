const { Router } = require("express");
const router = Router();
const {
  getCountries,
  getCountryByName,
  getCountryById,
} = require("../controllers/countryController");

router.get("/", getCountries);
router.get("/name", getCountryByName);
router.get("/:idPais", getCountryById);

module.exports = router;
