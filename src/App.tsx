import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import Login from './pages/Login/Login';
import Menu from './pages/Menu/menu';
import Tabs from './pages/Tabs/Tabs';
import Plotcontrolls from './pages/Menu/PlotControlls/plotcontrolls';
import Mngview from './pages/Menu/ManagementView/mngview';
import Reports from './pages/Menu/Reports/reports';
import Master from './pages/Menu/Master/master';
import Plotsalesview from './pages/Menu/ManagementView/PlotbasedInfo/plotsalesview';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
        <IonRouterOutlet>
        <Route exact path="/" component={Login}/>
        <Route path="/app" component={Tabs}/>  
        <Route exact path="/menu">
          <Menu />
        </Route>
        <Route exact path="/Plotcontrolls">
          <Plotcontrolls />
        </Route>
        <Route exact path="/Mngview">
          <Mngview />
        </Route>
        <Route exact path="/Reports">
          <Reports />
          </Route>
        <Route exact path="/Master">
          <Master />
          </Route>
          <Route exact path="/Plotsalesview">
          <Plotsalesview />
        </Route>
       </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
