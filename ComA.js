
import React from 'react'

const ComA = () => {
  return (
    <tr>
      <td>
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter a name"
        
        />
      </td>
      <td>
        <input
          type="text"
          name="address"
          required="required"
          placeholder="Enter address"

        />
      </td>
      <td>
        <input
          type="text"
          name="email"
          required="required"
          placeholder="Enter an email"

        />
      </td>
      <td>
        <input
          type="text"
          name="phoneNumber"
          required="required"
          placeholder="Enter a PhoneNumber"

        />
      </td>
    </tr>
  )
}

export default ComA
