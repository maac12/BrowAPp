import { createStore } from "redux";

const initialState = {
  indexPage: 0,
  currentPage: "Info",
  admin: false,
  orders: [],
};




const reducer = (state = initialState, action) => {
console.log(state)
  
  switch (action.type) {
    case "CHANGE_PAGE":
      return {
        indexPage: action.indexPage,
        currentPage: action.currentPage,
      };

    case "ADMIN_IS_HERE":
      return {
        ...state,
        admin: action.admin,
      };

      case "ADD_ORDERS":
        return {
          ...state,
          orders:[...state.orders, action.order],
        };

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
