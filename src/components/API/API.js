import axios from 'axios';

export const fetchContacts = async () => {
  const { data } = await axios.get(
    'https://636e9771bb9cf402c805b71b.mockapi.io/contacts'
  );

  return data;
};

export const addContact = async contact => {
  const { data } = await axios.post(
    'https://636e9771bb9cf402c805b71b.mockapi.io/contacts',
    contact
  );

  return data;
};

export const deleteContact = async id => {
  const { data } = await axios.delete(
    `https://636e9771bb9cf402c805b71b.mockapi.io/contacts/${id}`
  );

  return data;
};
