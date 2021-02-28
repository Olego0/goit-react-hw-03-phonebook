import React from "react";

import styles from "./ContactForm.module.css";

import PropTypes from "prop-types";

export default class ContactForm extends React.Component {
  state = {
    name: "",
    number: "",
  };
  static propTypes = {
    submit: PropTypes.func.isRequired,
  };
  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.submit(this.state);
  };
  render() {
    return (
      <form className={styles.wrapper} onSubmit={this.handleSubmit}>
        <p>Name</p>
        <input
          className={styles.input}
          type="text"
          placeholder="Enter name"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        ></input>
        <p>Number</p>
        <input
          className={styles.input}
          type="text"
          placeholder="Enter number"
          name="number"
          value={this.state.number}
          onChange={this.handleChange}
        ></input>
        <button className={styles.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
