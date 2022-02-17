import React from "react";
import { Route, Routes, Navigate   } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./utils/routes";

const AppRouter = () => {

  //Переменная АДМИНКИ
  const admin = false;

  return !admin ? (
    <Routes>
      {publicRoutes.map(({ path, Component, id }) => (
        <Route path={path} key={id} element={<Component />} exact={true} />
      ))}
      <Route path="*" element={<Navigate to="Home" replace />} />
    </Routes>
  ) : (
    <Routes>
      {privateRoutes.map(({ path, Component, id }) => (
        <Route path={path} key={id} element={<Component />} exact={true} />
      ))}

     <Route path="*" element={<Navigate to="WelcomeAdmin" replace />} />
    </Routes>
  );
};

export default AppRouter;
