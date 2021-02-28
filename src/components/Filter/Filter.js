import React from "react";

import styles from "./Filter.module.css";

import PropTypes from "prop-types";

function Filter({ filterChange, filterValue }) {
  return (
    <input
      className={styles.input}
      type="text"
      name="filter"
      value={filterValue}
      onChange={filterChange}
    ></input>
  );
}
export default Filter;

Filter.propTypes = {
  filterChange: PropTypes.func.isRequired,
  filterValue: PropTypes.string.isRequired,
};
