import { useSelector, useDispatch } from "react-redux";
import { getVisibleContacts } from "../../redux/selectors";
import * as actions from "../../redux/actions";

function ContactsList({ contacts, deleteContact }) {
  const dispatch = useDispatch();

  const visibleContacts = useSelector(getVisibleContacts);

  return (
    <ul>
      {visibleContacts.map((contact) => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button
            type="button"
            onClick={() => dispatch(actions.deleteContacts(contact))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ContactsList;
