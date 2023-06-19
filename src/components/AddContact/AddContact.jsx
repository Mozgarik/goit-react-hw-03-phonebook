import React, { Component } from 'react';
import s from './Form.module.css'

class AddContact extends Component {
  state = {
    name: '',
    number: '',
  };

  

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  handleSumbit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSumbit} >
          <label>
            <br />
            <input
            placeholder='Name'
              className={s.contactInput}
              value={this.state.name}
              onChange={this.handleChange}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <br />
          <label>
            <br />
            <input
            placeholder='Number'
            className={s.contactInput}
              value={this.state.number}
              onChange={this.handleChange}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <br />
          <button type="sumbit" className={s.button}>Add Contact</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
