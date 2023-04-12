import { CLEAR_LIST, RESET_LIST, REMOVE_LIST } from "./actions";
import { data } from "../../../data";

const reducer = (state, action) => {
  if (action.type === CLEAR_LIST) {
    return { ...state, people: [] };
  }

  if (action.type === RESET_LIST) {
    return { ...state, people: data };
  }

  if (action.type === REMOVE_LIST) {
    //let newPeople = people.filter((person) => person.id !== id);
    let newPeople = state.people.filter(
      (person) => person.id !== action.payload.id
    );
    return { ...state, people: newPeople };
  }
  return state;
};

export default reducer;
