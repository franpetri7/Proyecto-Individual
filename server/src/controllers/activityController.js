const { Country, Activity } = require('../db.js');

const addActivity = async (req, res) => {
  try {
    const { name, difficulty, duration, season, } = req.body;
    console.log('Se agregara la siguiente actividad', req.body);

    const validateActivity = await Activity.findOne({
      where: {
        name: name,
      },
    });

    if (!name || !difficulty || !duration || !season) {
      res.status(404).json('Porfavor, completa los campos.');
    }

    if (validateActivity) {
      res.status(404).json('Esta actividad ya existe');
    } else {
      const {id} = req.body;
      const newActivity = await Activity.create({
        id,
        name,
        difficulty,
        duration,
        season,
      });

      res.status(200).json(newActivity);
    }
  } catch (error) {
    console.log('error', error);
    res.status(500).send(error);
  }
};

const getActivities = async (req, res) => {
  let activity = await Activity.findAll();
  res.status(200).send(activity);
};

module.exports = {
  addActivity,
  getActivities,
};
