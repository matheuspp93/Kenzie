import { addWorks } from "./actions";
import axios from "axios";

export const addWorksThunk = () => async (dispatch, getState) => {
  const token = localStorage.getItem("authToken");

  try {
    const user = await axios.get(`https://kenziehub.me/profile`, {
      headers: {
        Authorization: `Bearer: ${token}`,
        "Content-type": "application/json",
      },
    });
    const userWorks = user.data.works;
    dispatch(addWorks(userWorks));
  } catch (err) {
    console.error(err);
  }
};
