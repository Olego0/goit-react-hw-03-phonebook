import React from "react";

import styles from "./ContactItem.module.css";

import PropTypes from "prop-types";

function ContactItem({ deleteFunction, contact }) {
  return (
    <li className={styles.li}>
      {contact.name}: {contact.number}
      <button
        type="button"
        onClick={() => deleteFunction(contact.id)}
        className={styles.btn}
      >
        Delete
      </button>
    </li>
  );
}
export default ContactItem;

ContactItem.propTypes = {
  deleteFunction: PropTypes.func.isRequired,
  contact: PropTypes.object.isRequired,
};
