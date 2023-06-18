export const validate = (data) => {
  const regexName = /^[a-zA-Z\s]+$/;
  let error = {};

  if (!data.name) error.name = "Añade otra actividad";
  else if (data.name.length > 20) error.name = "El nombre es muy largo !";
  else if (!regexName.test(data.name)) error.name = "Solo se permiten letras";

  if (data.difficulty === 0) error.difficulty = "Elige una dificultad";
  if (data.duration === 0) error.duration = "Elige una duracion";
  if (data.season === "") error.season = "Elige una temporada";

  if (!data.countries.length)
    error.countries = "Solo podes seleccionar un pais";

  return error;
};
