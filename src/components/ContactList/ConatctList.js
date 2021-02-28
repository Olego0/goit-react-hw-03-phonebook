import React from "react";

import ContactItem from "../ContactItem/ContactItem";

import PropTypes from "prop-types";

import {v4} from 'uuid';

export default class ContactList extends React.Component {
  static propTypes = {
    deleteFunction: PropTypes.func.isRequired,
  };
  render() {
    const { deleteFunction } = this.props;
    return (
      <div>
        <ul>
          {this.props.list.map((contact) => (
            <ContactItem key={v4()} deleteFunction={deleteFunction} contact={contact} />
          ))}
        </ul>
      </div>
    );
  }
}
