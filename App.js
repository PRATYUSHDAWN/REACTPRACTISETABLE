import data from "./mock.json"
import { useState, Fragment } from "react"
import { nanoid } from "nanoid";
import Component from './ComB'
import Editor from './ComA'
const App = () => {
  const [contacts, setContacts] = useState(data)
  const [addFormData, setAddFormData] = useState({
    fullName: '',
    address: '',
    phoneNumber: '',
    email: '',
  })
  const handleAddFormChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setAddFormData({ ...addFormData, [name]: value });
  }

  const [editContactId, setContactId] = useState(null);
const handleEditClick=(event,contact)=>{
  event.preventDefault();
  setContactId( contact.id)
}  

  const handleAddFormSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
    }
    setContacts([...contacts, newContact])

    setAddFormData({
      fullName: '',
      address: '',
      phoneNumber: '',
      email: '',
    })
  }
  return (
    <div>
      <form >
        <table>
          <thead>
            <tr>
              <th>NAME</th>
              <th>Address</th>

              <th>Phone Number</th>

              <th>Email</th>
              <th>Actions</th>
              {/* maping dynamically */}

            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) =>
              <Fragment>
                {editContactId === contact.id ?
                 (<Editor />) : 
                 (<Component contact={contact} handleEditClick={handleEditClick}/>)
                }
              </Fragment>
            )}

          </tbody>
        </table>
      </form>

      <h2>ADD a contact </h2>
      <form >
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter a name"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="address"
          required="required"
          placeholder="Enter address"
          onChange={handleAddFormChange}


        />

        <input
          type="text"
          name="email"
          required="required"
          placeholder="Enter an email"
          onChange={handleAddFormChange}

        />
        <input
          type="text"
          name="phoneNumber"
          required="required"
          onChange={handleAddFormChange}

          placeholder="Enter a PhoneNO."
        />
        <button onClick={handleAddFormSubmit}>ADD</button>

      </form>

    </div>
  )
}
export default App