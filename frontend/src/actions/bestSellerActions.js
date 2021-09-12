import {
  BESTSELLER_LIST_REQUEST,
  BESTSELLER_LIST_SUCCESS,
  BESTSELLER_LIST_FAIL,
} from "../constants/bestSellerConstants";

import axios from "axios";

export const listBestSellers = () => async (dispatch) => {
  try {
    dispatch({ type: BESTSELLER_LIST_REQUEST });
    const res = await axios.get("/api/bestsellers");
    dispatch({
      type: BESTSELLER_LIST_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: BESTSELLER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
