import { ADD_WORK } from "./actionsType";

const worksReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_WORK:
      const { list } = action;
      return list;

    default:
      return state;
  }
};

export default worksReducer;
