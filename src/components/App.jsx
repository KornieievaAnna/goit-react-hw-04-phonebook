import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from './Form/Form';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { Conteiner, Title } from './App.styled';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contact');
    const parsedContact = JSON.parse(contacts);
    if (parsedContact) {
      this.setState({ contacts: parsedContact });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contact', JSON.stringify(this.state.contacts));
    }
  }

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    this.state.contacts.map(contact => contact.name).includes(name)
      ? alert(`${name} is already in contact`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, contact],
        }));
  };

  deleteToDo = toDoId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== toDoId),
    }));
  };

  filter = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  findContact = evt => {
    // console.log(evt.currentTarget.value);
    this.setState({ filter: evt.currentTarget.value });
  };

  render() {
    return (
      <Conteiner>
        <Title>Phonebook</Title>
        <Form onSubmit={this.addContact} />
        <Title>Contact</Title>
        <Filter value={this.state.filter} onChange={this.findContact} />
        <ContactList contacts={this.filter()} deleteContact={this.deleteToDo} />
      </Conteiner>
    );
  }
}

export default App;
