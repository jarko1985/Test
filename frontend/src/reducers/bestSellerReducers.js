import {
  BESTSELLER_LIST_REQUEST,
  BESTSELLER_LIST_SUCCESS,
  BESTSELLER_LIST_FAIL,
} from "../constants/bestSellerConstants";

export const bestsellerListReducer = (state = { bestsellers: [] }, action) => {
  switch (action.type) {
    case BESTSELLER_LIST_REQUEST:
      return { loading: true, bestsellers: [] };
    case BESTSELLER_LIST_SUCCESS:
      return { loading: false, bestsellers: action.payload };
    case BESTSELLER_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
