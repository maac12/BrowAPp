import { createStore } from "redux";

const initialState = {
  indexPage: 0,
  currentPage: "Info",
  admin: false,
};

const reducer = (state = initialState, action) => {
  console.log(state.admin);
  switch (action.type) {
    case "CHANGE_PAGE":
      return {
        indexPage: action.indexPage,
        currentPage: action.currentPage,
      };

    case "ADMIN_IS_HERE":
      return {
        admin: action.admin,
      };

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
