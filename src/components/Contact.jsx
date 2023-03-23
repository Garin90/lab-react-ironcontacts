import React from 'react'

function Contact({ contact, onClickDelete }) {
  function handleOnClickDelete() {
    onClickDelete(contact)
  }

  return (
    <tr>
      <td><img src={contact.pictureUrl} alt={`${contact.name} pic`} style={{width: 60}} /></td>
      <td>{contact.name}</td>
      <td>{contact.popularity.toFixed(2)}</td>
      {contact.wonOscar ? <td>🏆</td> : <td></td>}
      {contact.wonEmmy ? <td>🏆</td> : <td></td>}
      <td><button onClick={handleOnClickDelete}>Delete</button></td>
    </tr>
  )
}

export default Contact