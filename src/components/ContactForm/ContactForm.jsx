import { Component } from 'react';
import { nanoid } from 'nanoid';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChangeInput = ({ target: { value, name } }) => {
    return this.setState({ [name]: value });
  };

  handleSubmit = () => {
    const contact = {
      ...this.state,
      id: nanoid(5),
    };
    console.log(contact.id);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input
            onChange={this.handleChangeInput}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.name}
          />
        </label>
        <label>
          <input
            onChange={this.handleChangeInput}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.value}
          />
        </label>
        <button>add contact</button>
      </form>
    );
  }
}
