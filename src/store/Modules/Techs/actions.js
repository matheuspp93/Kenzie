import { ADD_TECHS } from "./actionsType";

export const addTechs = (list) => {
  return {
    type: ADD_TECHS,
    list,
  };
};
