import axios from "axios";
import * as actionTypes from "../constants";
// * as actionTypes 将constants内倒出所有东西全部

// export const getPro = () => {
//   return dispatch => {
//     axios.get("http://localhost:2019/products").then(res => {
//       dispatch({
//         type: actionTypes.GET_PRO,
//         products: res.data
//       });
//     });
//   };
// };
export const getPro = () => {
  return dispatch => {
    axios.get("http://localhost:2019/products").then(res => {
      dispatch({
        type: actionTypes.GET_PRO,
        products: res.data.products
      });
    });
  };
};
// export const addCart = (id, num) => {
//   return dispatch => {
//     axios
//       .patch(`http://localhost:2019/products/${id}`, { inventory: num })
//       .then(res => {
//         // console.log(res.data);
//         dispatch({
//           type: actionTypes.ADD_CART,
//           id
//         });
//         dispatch({
//           type: actionTypes.CHANGE,
//           id
//         });
//       });
//   };
// };
export const addCart = (id, num) => {
  return dispatch => {
    axios
      .patch(`http://localhost:2019/products/${id}`, { inventory: num })
      .then(res => {
        // console.log(res.data);
        dispatch({
          type: actionTypes.ADD_CART,
          id
        });
        dispatch({
          type: actionTypes.CHANGE,
          id
        });
      });
  };
};
export const change = id => {
  return dispatch => {
    dispatch({
      type: actionTypes.CHANGE,
      id
    });
    dispatch({
      type: actionTypes.ADD_CART,
      id
    });
  };
};
// export const minus = (proid, num) => {
//   return dispatch => {
//     axios
//       .patch(`http://localhost:2019/products/${proid}`, { inventory: num })
//       .then(res => {
//         dispatch({
//           type: actionTypes.MINUS,
//           proid
//         });
//       });
//   };
// };
export const minus = (proid, num) => {
  return dispatch => {
    dispatch({
      type: actionTypes.MINUS,
      proid
    });
  };
};

export const checkout = () => {
  return dispatch => {
    dispatch({
      type: "CHECK_OUT",
      checkout: {
        productId: [],
        quantityByid: {}
      }
    });
  };
};
