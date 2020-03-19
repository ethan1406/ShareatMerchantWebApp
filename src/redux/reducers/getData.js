import axios from "axios";
import { GETDATA } from "../actions/actionTypes";
import { dateValue } from "../../container/Layout/utils/helpers";
const initialState = {
  merchantData: []
};
export default function(state = initialState, action) {
  switch (action.type) {
    case GETDATA:
      return {
        ...state,
        merchantData: action.payload
      };
    default:
      return state;
  }
}
