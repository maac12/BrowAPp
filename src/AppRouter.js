import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { privateRoutes, publicRoutes } from "./utils/routes";

const AppRouter = ({admin}) => {
 
  console.log(admin)
 //Развилка на публичные и приват странницы

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

const mapStateToProps = ({admin}) => {
  return {admin};
};

export default connect(mapStateToProps)(AppRouter);
