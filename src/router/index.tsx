import { HashRouter, Redirect, Route, Switch } from "react-router-dom";

import routes from "./routes";

const Router = () => {
  return (
    <div style={{ marginTop: 64 }}>
      <HashRouter>
        <Switch>
          {Object.values(routes)
            .filter((r) => !r.redirectTo)
            .map((route) => (
              <Route key={route.path} {...route} />
            ))}

          {Object.values(routes)
            .filter((r) => r.redirectTo)
            .map(({ redirectTo, ...route }) => (
              <Route key={route.path} {...route}>
                <Redirect to={redirectTo as string} />
              </Route>
            ))}
        </Switch>
      </HashRouter>
    </div>
  );
};

export default Router;
