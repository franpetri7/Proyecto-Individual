import CardContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCountries, getAllActivities } from "../../redux/actions";
import styles from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getAllActivities());
  }, [dispatch]);

  return (
    <>
      <div className={styles.cardContainer}>
        <CardContainer />
      </div>
    </>
  );
};

export default Home;
