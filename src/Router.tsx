import { HashRouter, Route, Routes } from "react-router-dom";

import routes from "./presentation/routes.tsx";

const Router = () => {
  return (
    <div style={{ marginTop: 64 }}>
      <HashRouter>
        <Routes>
          {Object.values(routes).map((route) => (
            <Route key={route.path} {...route} />
          ))}
        </Routes>
      </HashRouter>
    </div>
  );
};

export default Router;
