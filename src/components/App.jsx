import { useState, useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';
import Form from './Form/Form';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { Conteiner, Title } from './App.styled';

const Contacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export function App() {
  const [contacts, setContact] = useState(Contacts);
  const [filters, setFilter] = useState('');
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      const contactList = localStorage.getItem('Contact');
      const parsedContact = JSON.parse(contactList);
      if (parsedContact) {
        setContact(parsedContact);
      }
      isFirstRender.current = false;
      return;
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('Contact', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    contacts.map(contact => contact.name).includes(name)
      ? alert(`${name} is already in contact`)
      : setContact(prevState => [...prevState, contact]);
  };

  const deleteToDo = toDoId => {
    setContact(prevState => prevState.filter(({ id }) => id !== toDoId));
  };

  const filterDo = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filters.toLowerCase())
  );

  const findContact = evt => {
    setFilter(evt.currentTarget.value);
  };

  return (
    <Conteiner>
      <Title>Phonebook</Title>
      <Form onSubmit={addContact} />
      <Title>Contact</Title>
      <Filter value={filters} onChange={findContact} />
      <ContactList contacts={filterDo} deleteContact={deleteToDo} />
    </Conteiner>
  );
}
export default App;
