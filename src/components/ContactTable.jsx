import React, {useEffect, useState} from 'react';
import contacts from "../contacts.json";
import Contact from './Contact';

function ContactTable() {
  const [contactsTable, setContactsTable] = useState([]);

  useEffect(() => {
    const firstFive = contacts.slice(0,5);
    setContactsTable(firstFive);
  },[])


  return (
    <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
      </thead>
      <tbody>
        {contactsTable.map((contact) => (
          <Contact contact={contact} key={contact.id} />
        ))}
      </tbody>
    </table>
  )
}

export default ContactTable;