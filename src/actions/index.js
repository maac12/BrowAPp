const pageArrow = ["info", "aboutMe"];
var __indexPage = 0;
var __currentPage = pageArrow[0];

const changePage = () => {
  __indexPage++;
  if (__indexPage === pageArrow.length) {
    __indexPage = 0;
  }
  __currentPage = pageArrow[__indexPage];

  console.log(__indexPage);
  return {
    type: "CHANGE_PAGE",
    indexPage: __indexPage,
    currentPage: __currentPage,
  };
};

export default changePage;
