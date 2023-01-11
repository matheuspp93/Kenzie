import { ADD_WORK } from "./actionsType";

export const addWorks = (list) => {
  return {
    type: ADD_WORK,
    list,
  };
};
