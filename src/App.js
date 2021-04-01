import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Suspense, lazy } from 'react';
const NavBar = lazy(() => import('./components/navabar/Navbar'));
const Home = lazy(() => import('./components/hero/Hero'));
const Contact = lazy(() => import('./components/contact/Contact'));
const Hajj = lazy(() => import('./components/content_page/Hajj'));
const Omra = lazy(() => import('./components/content_page/Omra'));
const Partenaire = lazy(() => import('./components/partenaire/Partenaire'));
const Vacances = lazy(() => import('./components/vacances/Vacances'));
require('./App.css');

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <NavBar/>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/pellerinage-hajj" component={Hajj} />
            <Route path="/pellerinage-omra" component={Omra} />
            <Route path="/partenaires" component={Partenaire} />
            <Route path="/vacances" component={Vacances} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
