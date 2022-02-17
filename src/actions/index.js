//Местные глобальные переменные
const pageArrow = ["Info", "AboutMe", "PopularQuestions", "Price"];
var __indexPage = 0;
var __currentPage = pageArrow[0];

//Установка страницы
const setPage = (namePage) => {
  __currentPage = pageArrow.find((item) => item === namePage);
  __indexPage = pageArrow.findIndex((item) => item === namePage);

  return {
    type: "CHANGE_PAGE",
    indexPage: __indexPage,
    currentPage: __currentPage,
  };
};

//Переключатель страниц
const nextPage = () => {
  __indexPage++;
  if (__indexPage === pageArrow.length) {
    __indexPage = 0;
  }
  __currentPage = pageArrow[__indexPage];
  return {
    type: "CHANGE_PAGE",
    indexPage: __indexPage,
    currentPage: __currentPage,
  };
};

export { nextPage, setPage };



//Админ здесь
export const adminIsHere = (bool) => {
  
  return {
    type: "ADMIN_IS_HERE",
    admin: bool,
  };
};
