import React, { useState } from 'react';
import contactsDB from "../contacts.json";
import Contact from './Contact';


const restContacts = contactsDB.map( x => x );

for(let i = 0; i < 5; i++){
  restContacts.shift();
}

function ContactTable() {
  const contactsArray = contactsDB.slice(0,5);
  const [contacts, setContacts] = useState(contactsArray);
  
  

  function handleAddRandomContact() {
    if(restContacts.length !== 0) {
      const index = (Math.floor(Math.random()*restContacts.length))
      setContacts([...new Set([restContacts[index], ...contacts])])
    
      restContacts.splice(index, 1);
    } else {
      return
    }
  }

  function handleSortPopularity() {
    setContacts([...contacts].sort((a, b) =>  b.popularity - a.popularity))
  }

  function handleSortName() {
    setContacts([...contacts].sort((a, b) => a.name.localeCompare(b.name)))
  }
 

  return (
    <div>
      <h1>IronContacts</h1>
      <button onClick={handleAddRandomContact}>Add Random Contact</button>
      <button onClick={handleSortPopularity}>Sort by popularity</button>
      <button onClick={handleSortName}>Sort by Name</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <Contact contact={contact} key={contact.id} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ContactTable;