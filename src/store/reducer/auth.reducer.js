// what need for flux
/* 
useReducer
 store => view
 reducer => 
*/

const initialState = {
  auth: false,
  data: null,
  loading: false,
  error: true,
};

// we need to make a Reducer Function
export const authReducer = (store = initialState, action) => {
  switch (action.type) {
    case "process": {
      return (store = { loading: true, ...store });
    }
    case "error": {
      return (store = { loading: false, error: action.payload, ...store });
    }
    case "login": {
      return (store = {
        loading: true,
        auth: true,
        data: action.payload,
        error: null,
      });
    }
    case "logout": {
      return (store = { auth: false, data: null });
    }
    default:
      return store;
  }
};
