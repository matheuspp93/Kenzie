import { SET_AUTHENTICATE } from "./actionsType";

export const setAuthenticate = (isAuthenticated) => ({
  type: SET_AUTHENTICATE,
  isAuthenticated,
});
