import PropTypes from "prop-types";
import styles from "./SearchInput.module.css";

const SearchInput = ({ onSubmit, onChange, value }) => {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <input
        onChange={onChange}
        value={value}
        type="text"
        className={styles.input}
        placeholder="list"
      />
      <button className={styles.addButton} type="submit">
        add
      </button>
    </form>
  );
};

SearchInput.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default SearchInput;
