import { useDispatch, useSelector } from 'react-redux';
import { deleteContactsData } from 'redux/operation';
import { getFilteredContacts } from 'redux/selectors';

export function ContactList() {
  const formContactsList = useSelector(getFilteredContacts);

  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContactsData(id));
  };

  return (
    <ul>
      {formContactsList.map(item => (
        <li key={item.id}>
          <p className="contact-data">
            {item.name}: {item.phone}
          </p>
          <button onClick={() => handleDeleteContact(item.id)} type="button">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
