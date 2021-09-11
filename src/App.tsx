import { Route, Switch, Redirect } from 'react-router-dom';
import { Navbar, Web3ReactManager } from "./components/common";
import { Claim } from "./pages/Claim";
import { Rule } from "./pages/Rule";

export default function App(): JSX.Element {
  return (
    <>
    <Web3ReactManager>
      <Navbar/>
      <Route exact path="/">
        <Redirect to="/claim" />
      </Route>
      <Switch>
        <Route exact strict path="/claim" component={Claim} />
        <Route exact strict path="/rule" component={Rule} />
      </Switch>
    </Web3ReactManager>
    </>
  );
}
