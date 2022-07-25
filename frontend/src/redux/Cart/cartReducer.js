import { ADD_TO_CART, REMOVE_FROM_CART } from "./cartTypes";

const initialState = {
  products: [],
  qty: 0,
  total: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        products: [...state.products, action.payload],
        qty: state.qty + 1,
        total: state.total + action.payload.price * action.payload.qty,
      };
    case REMOVE_FROM_CART: {
      const index = state.products.findIndex((item) => item._id === action.id);
      let newProducts = [...state.products];
      if (index >= 0) {
        newProducts.splice(index, 1);
      } else {
        console.log("cannot remove");
      }
      return {
        ...state,
        products: newProducts,
        qty: state.qty - 1,
        total: state.total - action.price,
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
