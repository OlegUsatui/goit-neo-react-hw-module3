import styles from './SearchBox.module.css';

const SearchBox = ({ value, handleChange }) => {

  const onChange = (e) => {
    handleChange(e.target.value)
  }
  return (
    <div className={styles.searchBox}>
    <label htmlFor="searchBox" className={styles.label}>Find contacts by name</label>
    <input
      type="searchBox"
      name="number"
      onChange={onChange}
      value={value}
      className={styles.input}
    />
  </div>
  )
}

export default SearchBox
