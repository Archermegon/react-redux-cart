const products = (state = [], action) => {
  switch (action.type) {
    case "GET_PRO":
      return action.products;
      break;
    case "ADD_CART":
      return state.map(ele => {
        if (ele.id === action.id) {
          ele.inventory--;
          return ele;
        } else {
          return ele;
        }
      });

    case "MINUS":
      return state.map(ele => {
        if (ele.id === action.proid) {
          ele.inventory++;
          return ele;
        } else {
          return ele;
        }
      });

    default:
      return state;
  }
};

export default products;
