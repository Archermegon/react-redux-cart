// state = {
//   productId: [],
//   quantityByid: {}
// }
import { GET_CART, CHANGE, MINUS } from "../constants";
const cart = (
  state = {
    productId: [],
    quantityByid: {}
  },
  action
) => {
  switch (action.type) {
    case "GET_CART":
      return action.cart;
      break;
    case CHANGE:
      const { id } = action;
      const newState = { ...state };
      if (newState.productId.indexOf(id) === -1) {
        newState.productId.push(id);
        newState.quantityByid[id] = 1;
      } else {
        newState.quantityByid[id]++;
      }
      return newState;
      break;
    case MINUS:
      const { proid } = action;
      const theState = { ...state };
      if (theState.quantityByid[proid] === 1) {
        delete theState.quantityByid[proid];
        theState.productId.splice(theState.productId.indexOf(proid), 1);
      } else {
        theState.quantityByid[proid]--;
      }
      return theState;
      break;
    case "CHECK_OUT":
      return action.checkout;
    default:
      return state;
  }
};

export default cart;
