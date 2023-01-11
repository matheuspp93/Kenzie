import { ADD_USER } from "./actionsType";

export const addUser = (user) => ({
  type: ADD_USER,
  user,
});
