import React from "react";

import "./App.css";

import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ConatctList";

import { v4 } from "uuid";

import Filter from "./components/Filter/Filter";

class App extends React.Component {
  state = {
    contacts: [],
    filter: "",
  };
  componentDidMount() {
    const persistedContacts = localStorage.getItem("contacts");
    if (persistedContacts) {
      this.setState({
        contacts: JSON.parse(persistedContacts)
      })
    }
    
  }
  componentDidUpdate(prevProps,prevState) {
    if (prevState.contacts !== this.state.contacts) {
        localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  }
  }
    handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };
  handleSubmit = (contact) => {
    let newContact = {
      name: contact.name,
      number: contact.number,
      id: v4(),
    };
    if (
      this.state.contacts.find(
        (el) => el.name === newContact.name && el.number === newContact.number
      )
    ) {
      alert(`${newContact.name} is already in your list`);
    } else {
      this.setState((prevState) => {
        return {
          contacts: [...prevState.contacts, newContact],
        };
      });
    }
  };
  handleDelete = (id) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter((contact) => {
          if (contact.id === id) {
            return false;
          } else {
            return true;
          }
        }),
      };
    });
  };

  render() {
    const {contacts,filter } = this.state;
    const filterContacts = contacts.filter((el) => el.name.includes(filter));

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm submit={this.handleSubmit} />
        <h2>Contacts</h2>
        <h4>Find contacts by name</h4>
        <Filter filterChange={this.handleChange} filterValue={filter} />
        <ContactList
          deleteFunction={this.handleDelete}
          list={filterContacts}
        />
      </div>
    );
  }
}

export default App;