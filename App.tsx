import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, Switch, Router as WouterRouter } from 'wouter';

import { TerminalChrome } from './components/TerminalChrome';
import { ScanlineOverlay } from './components/ScanlineOverlay';

import Home from './pages/Home';
import TerminalPage from './pages/TerminalPage';
import Specimens from './pages/Specimens';
import SpecimenDetail from './pages/SpecimenDetail';
import FieldReports from './pages/FieldReports';
import FieldReport001 from './pages/FieldReport001';
import Incidents from './pages/Incidents';
import Personnel from './pages/Personnel';
import Timeline from './pages/Timeline';
import Research from './pages/Research';
import MapPage from './pages/Map';
import Downloads from './pages/Downloads';
import Login from './pages/Login';
import ErrorPage from './pages/ErrorPage';

import HiddenOriginalRecord from './pages/HiddenOriginalRecord';
import HiddenFailureReport from './pages/HiddenFailureReport';
import HiddenSurvivor from './pages/HiddenSurvivor';

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      {/* Hidden pages that break out of the chrome */}
      <Route path="/hidden/original-record" component={HiddenOriginalRecord} />
      <Route path="/hidden/failure-report" component={HiddenFailureReport} />
      <Route path="/hidden/survivor" component={HiddenSurvivor} />

      {/* Pages wrapped in terminal chrome */}
      <Route path="*">
        <TerminalChrome>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/terminal" component={TerminalPage} />
            <Route path="/specimens" component={Specimens} />
            <Route path="/specimens/:id" component={SpecimenDetail} />
            <Route path="/fieldreports" component={FieldReports} />
            <Route path="/fieldreports/001" component={FieldReport001} />
            <Route path="/incidents" component={Incidents} />
            <Route path="/personnel" component={Personnel} />
            <Route path="/timeline" component={Timeline} />
            <Route path="/research" component={Research} />
            <Route path="/map" component={MapPage} />
            <Route path="/downloads" component={Downloads} />
            <Route path="/login" component={Login} />
            <Route component={ErrorPage} />
          </Switch>
        </TerminalChrome>
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
        <ScanlineOverlay />
        <Router />
      </WouterRouter>
    </QueryClientProvider>
  );
}

export default App;
