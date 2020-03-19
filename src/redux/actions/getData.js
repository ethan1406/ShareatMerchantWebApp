import axios from "axios";
import { GETDATA } from "./actionTypes";
import { dateValue } from "../../container/Layout/utils/helpers";

// get data
export const getData = () => async dispatch => {
  try {
    const res = await axios.get(
      `/5b346f48d585fb0e7d3ed3fc/2020-03-06T08:55:16.052Z`
    );
    console.log(res.data);
    dispatch({ type: GETDATA, payload: res.data });
  } catch (error) {
    console.error(error.response.data);
  }
};
