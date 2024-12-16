import { v4 as uuidv4 } from "uuid";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
} from "../utils/constants";

export const addContact = (contact) => {
  return {
    type: ADD_CONTACT,
    contact: {
      ...contact,
      id: uuidv4(),
    },
  };
};

export const deleteContact = (id) => {
  return {
    type: DELETE_CONTACT,
    id,
  };
};

export const updateContact = (contact) => {
  return {
    type: UPDATE_CONTACT,
    contact,
  };
};
