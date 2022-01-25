import { Route, Switch, Redirect } from 'react-router-dom';
import { Navbar, Web3ReactManager } from './components/common';
import { DialogProvider } from './providers/DialogProvider';
import { Claim } from './pages/Claim';
import { Rule } from './pages/Rule';
import Token from './pages/Token';

export default function App(): JSX.Element {
  return (
    <>
      <Web3ReactManager>
        <DialogProvider>
          <Navbar />
          <Switch>
            <Route exact strict path='/' component={Claim} />
            <Route exact strict path='/*' component={Token} />
          </Switch>
        </DialogProvider>
      </Web3ReactManager>
    </>
  );
}
