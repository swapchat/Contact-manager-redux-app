import {
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
} from "../utils/constants";

const initialState = {
  data: [],
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        data: [...state.data, action.contact],
      };

    case DELETE_CONTACT:
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.id),
      };

    case UPDATE_CONTACT:
      return {
        ...state,
        data: state.data.map((item) =>
          item.id === action.contact.id ? action.contact : item
        ),
      };

    default:
      return state;
  }
};

export default contactReducer;
