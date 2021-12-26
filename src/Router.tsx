import { BrowserRouter, Switch, Route } from "react-router-dom";
import Coins from "./routes/Coins";
import Coin from "./routes/Coin";
import TodoList from "./routes/TodoList";
import Hour from "./routes/hour";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path={'/hour'}>
          <Hour/>
        </Route>
        <Route exact={true} path={"/todo-list"}>
          <TodoList />
        </Route>
        <Route path={"/:coinId"}>
          <Coin />
        </Route>
        <Route path={"/"}>
          <Coins />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
