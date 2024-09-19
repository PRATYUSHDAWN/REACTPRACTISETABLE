import React from 'react'

const ComB = ({ contact, handleEditClick }) => {
  return (
    <tr>
      <td>{contact.fullName}</td>
      <td>{contact.address}</td>

      <td>{contact.email}</td>

      <td>{contact.phoneNumber}</td>
      <td>
        <button onClick={(event) => handleEditClick(event, contact)}> edit</button>
      </td>

    </tr>
  )
}

export default ComB
