import { Switch, Route } from "react-router-dom";
import NavigationItems from "./config";

function Routes() {
  return (
    <div>
      <Switch>
        {NavigationItems.map((item) => (
          <Route exact key={item.path} path={item.path} component={item.component} />
        ))}
      </Switch>
    </div>
  );
}

export default Routes;
