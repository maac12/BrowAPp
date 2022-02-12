import { createStore } from 'redux';



const initialState = {
    indexPage: 0,
    currentPage: "info",
  };
  

  const reducer = (state = initialState, action) => {

  
    switch (action.type) {
      case "CHANGE_PAGE":
       
        return {
          indexPage: action.indexPage,
          currentPage: action.currentPage
        };
  
      default:
        return state;
    }
  };



  const store = createStore(reducer);

export default store;