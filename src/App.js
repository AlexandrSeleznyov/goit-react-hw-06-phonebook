import React from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import ContactsList from "./components/ContactsList/ContactsList";
import { getContacts } from "./redux/selectors";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
}
export default App;
