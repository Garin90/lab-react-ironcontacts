import React from 'react'

function Contact({ contact }) {

  return (
    <tr>
      <td><img src={contact.pictureUrl} alt={`${contact.name} pic`} /></td>
      <td>{contact.name}</td>
      <td>{contact.popularity.toFixed(2)}</td>
      {contact.wonOscar ? <td>🏆</td> : <td></td>}
      {contact.wonEmmy ? <td>🏆</td> : <td></td>}
    </tr>
  )
}

export default Contact