import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import * as actions from "../../redux/actions";
import s from "./ContactForm.module.css";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const dispatch = useDispatch();

  const handleInput = (e) => {
    const { name, value } = e.target;

    name === "name" ? setName(value) : setNumber(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actions.addContacts({ name, number }));
    resetState();
  };

  const resetState = () => {
    setName("");
    setNumber("");
  };

  return (
    <form className={s.contactForm} onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          onChange={handleInput}
          type="text"
          value={name}
          name="name"
          placeholder="New contact name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label>
        Number:
        <input
          onChange={handleInput}
          type="tel"
          value={number}
          name="number"
          placeholder="Number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>
      <button type="submit">Отправить</button>
    </form>
  );
}
