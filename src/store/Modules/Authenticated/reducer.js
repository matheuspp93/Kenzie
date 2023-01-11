import { SET_AUTHENTICATE } from "./actionsType";

const authenticateReducer = (state = false, action) => {
  switch (action.type) {
    case SET_AUTHENTICATE:
      return action.isAuthenticated;
    default:
      return state;
  }
};

export default authenticateReducer;
