import { Dashboard } from '../pages/Dashboard';
import { Switch, Route } from 'react-router-dom';


export function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
    </Switch>
  );
}