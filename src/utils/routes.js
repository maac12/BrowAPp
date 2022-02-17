import { ADMIN_ROUTE, HOME_ROUTE, LOGIN_ADMIN_ROUTE } from "./const";
import App from "../component/App/App";
import AdminPage from "../component/AdminPage/AdminPage";
import LoginAdmine from "../component/login-admin/login-admin";


export const publicRoutes = [
  {
    path: HOME_ROUTE,
    Component: App,
    id: 111,
  },

  {
    path: LOGIN_ADMIN_ROUTE,
    Component: LoginAdmine,
    id: 112,
  },
];

export const privateRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: AdminPage,
    id: 113,
  },
];
