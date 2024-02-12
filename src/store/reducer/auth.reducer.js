// what need for flux
/* 
useReducer
 store => view
 reducer => 
*/

const initialState = {
  auth: false,
  data: null,
};

// we need to make a Reducer Function
export const authReducer = (store = initialState, action) => {
  switch (action.type) {
    case "login": {
      return (store = { auth: true, data: action.payload });
    }
    case "logout": {
      return (store = { auth: false, data: null });
    }
    default:
      return store;
  }
};
