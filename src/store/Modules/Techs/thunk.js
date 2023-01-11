import { addTechs } from "./actions";
import axios from "axios";

export const addTechsThunk = () => async (dispatch, getState) => {
  const token = localStorage.getItem("authToken");

  try {
    const user = await axios.get(`https://kenziehub.me/profile`, {
      headers: {
        Authorization: `Bearer: ${token}`,
        "Content-type": "application/json",
      },
    });
    const userTechs = user.data.techs;
    dispatch(addTechs(userTechs));
  } catch (err) {
    console.error(err);
  }
};
