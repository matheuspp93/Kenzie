import { ADD_TECHS } from "./actionsType";

const techsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TECHS:
      const { list } = action;
      return list;

    default:
      return state;
  }
};

export default techsReducer;
