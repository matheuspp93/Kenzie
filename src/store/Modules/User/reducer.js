import { ADD_USER } from "./actionsType";

const userReducer = (state = "", action) => {
  switch (action.type) {
    case ADD_USER:
      return action.user;
    default:
      return state;
  }
};

export default userReducer;
