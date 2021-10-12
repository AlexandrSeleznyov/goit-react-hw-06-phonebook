import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import { addContacts, deleteContacts, filterContacts } from "./actions";

const contacts = createReducer([], {
  [deleteContacts]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload.id),

  [addContacts]: (state, { payload }) => {
    const findContact = state.find((contact) => {
      return contact.name === payload.name;
    });
    return !findContact
      ? [payload, ...state]
      : alert(`${payload.name} is already in contact`);
  },
});

const filter = createReducer("", {
  [filterContacts]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts,
  filter,
});
