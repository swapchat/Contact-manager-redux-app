import { Alert, Button, ButtonGroup, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteContact } from "../reducers/contactReducer";

const ContactList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data: contacts } = useSelector((state) => state.contacts);

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const handleUpdateContact = (id) => {
    navigate(`/edit/${id}`);
  };

  if (contacts.length === 0) {
    return (
      <Alert variant="info" className="text-center">
        <h5>No Contacts Found</h5>
        <p>
          <Button variant="primary" onClick={() => navigate("/add")}>
            Add Contact
          </Button>
        </p>
      </Alert>
    );
  }
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact, index) => {
          return (
            <tr key={contact.id}>
              <td>{index + 1}</td>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
              <td>
                <ButtonGroup
                  style={{
                    display: "flex",
                    gap: 4,
                    margin: "0 auto",
                  }}
                >
                  <Button
                    size="small"
                    onClick={() => handleUpdateContact(contact.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    size="small"
                    onClick={() => handleDeleteContact(contact.id)}
                  >
                    Delete
                  </Button>
                </ButtonGroup>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default ContactList;
