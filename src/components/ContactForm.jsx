import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { addContact, updateContact } from "../reducers/contactReducer";

const ContactForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const { data: contacts } = useSelector((state) => state.contacts);

  // Find the contact by ID if editing
  const initialContact = id
    ? contacts.find((contact) => contact.id === id)
    : null;

  const validate = () => {
    const errors = {};
    if (!contact.name.trim()) {
      errors.name = "Name is required.";
    }
    if (!contact.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email)) {
      errors.email = "Email is invalid.";
    }
    if (!contact.phone.trim()) {
      errors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(contact.phone)) {
      errors.phone = "Phone number must be 10 digits.";
    }
    return errors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContact({
      ...contact,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    if (id) {
      dispatch(updateContact(contact));
    } else {
      dispatch(addContact({ ...contact, id: uuidv4() }));
    }
    navigate("/");
  };

  useEffect(() => {
    if (initialContact) {
      setContact(initialContact);
    }
  }, [initialContact]);

  return (
    <Form className="contact-form" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          placeholder="Enter contact name"
          value={contact.name}
          onChange={handleChange}
          isInvalid={!!errors.name}
        />
        <Form.Control.Feedback type="invalid">
          {errors.name}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="abc@email.com"
          value={contact.email}
          onChange={handleChange}
          isInvalid={!!errors.email}
        />
        <Form.Control.Feedback type="invalid">
          {errors.email}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="phone">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="text"
          name="phone"
          placeholder="Enter your phone number"
          value={contact.phone}
          onChange={handleChange}
          isInvalid={!!errors.phone}
        />
        <Form.Control.Feedback type="invalid">
          {errors.phone}
        </Form.Control.Feedback>
      </Form.Group>
      <Button type="submit">{id ? "Update Contact" : "Add Contact"}</Button>
    </Form>
  );
};

export default ContactForm;
