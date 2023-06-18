import styles from "./SearchBar.module.css";

// eslint-disable-next-line react/prop-types
export const SearchBar = ({ searchCountry }) => {
  const handleChange = (e) => {
    searchCountry(e.target.value);
  };

  return (
    <div>
      <input
        className={styles.busqueda}
        placeholder="Busca un país"
        type="search"
        onChange={handleChange}
      />
    </div>
  );
};
