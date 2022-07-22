import { Component } from 'react';
import { nanoid } from 'nanoid';
import Container from './Container';
import AppContainer from './AppContainer';
import ContactsForm from "./ContactsForm";
import ContactList from './ContactList';
import ContactsFilter from './ContactsFilter';


export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  }

  componentDidMount() {
    const contactsStorage = localStorage.getItem('contacts');
    const parseStorageContacts = JSON.parse(contactsStorage);
    console.log(parseStorageContacts);

    if (parseStorageContacts) {
      this.setState({ contacts: parseStorageContacts })
    }
  }

  componentDidUpdate(prevProps, prevState) {

    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    }

    const findContact = this.state.contacts.find(contact =>
      contact.name.toLowerCase().includes(name.toLowerCase())
    );

    findContact
      ? alert('This name is already in contact')
      : this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
  }

  removeContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }))
  }

  onFilterContact = e => {
    const { value } = e.currentTarget;

    this.setState({ filter: value });
  }

  render() {
    const { contacts, filter } = this.state;
    const normalizeFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );

    return (
      <AppContainer title="Phonebook">
        <Container title='Add Contacts:'>
          <ContactsForm onSubmit={this.addContact} />
        </Container>
        <Container title='Contacts:'>
          <ContactsFilter filter={filter} onChange={this.onFilterContact} />
          <ContactList contacts={visibleContacts} removeContact={this.removeContact} />
        </Container>
      </AppContainer>
    );
  }
}
