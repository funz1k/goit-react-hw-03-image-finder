import { Component } from "react";

class ContactsForm extends Component {
    state = {
        name: '',
        number: '',
        id: '',
    }

    onInputChange = e => {
        const { name, value } = e.currentTarget;

        this.setState({ [name]: value });
    }

    onSubmit = e => {
        e.preventDefault();

        this.props.onSubmit(this.state.name, this.state.number);
        this.reset();
    }

    reset = () => {
        this.setState({ name: '', number: '' });
    };

    render() {
        const { number, name } = this.state;

        return (
            <form onSubmit={this.onSubmit}>
                <label>Name
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={name}
                        onChange={this.onInputChange}
                    />
                </label>
                <label> Number
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={number}
                        onChange={this.onInputChange}
                    />
                </label>
                <button type='submit'>Add contact</button>
            </form>
        )
    }
}

export default ContactsForm;