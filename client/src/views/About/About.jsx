import styles from "./About.module.css";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.aboutContainer}>
        <h1>¡Bienvenido a mi página web!</h1>
        <p>
          Mi nombre es Francisco y soy un apasionado desarrollador web en
          constante aprendizaje. Mi objetivo principal es crear experiencias web
          atractivas, intuitivas y funcionales que hagan una diferencia positiva
          en la vida de las personas. Para este proyecto, he elegido la
          combinación de React y Redux debido a su eficiencia y capacidad para
          construir interfaces de usuario interactivas y escalables. La
          utilización de una base de datos integrada me permite almacenar y
          gestionar datos de manera efectiva, brindando una experiencia fluida y
          dinámica a los usuarios.
        </p>
        <p>
          Si estás interesado en trabajar juntos o tienes alguna pregunta, no
          dudes en ponerte en contacto conmigo. Gracias por visitar mi página
          web y por tu interés en mi trabajo. Espero que encuentres esta
          plataforma útil y emocionante. ¡Sigue explorando y disfruta de tu
          experiencia!
        </p>
      </div>
      <div className={styles.icons}>
        <a href="https://www.linkedin.com/in/francisco-petri-95a1bb1a7/">
          <img src={linkedin} alt="" />
        </a>
        <a href="https://github.com/franpetri7">
          <img src={github} alt="" />
        </a>
      </div>
    </div>
  );
};

export default About;
