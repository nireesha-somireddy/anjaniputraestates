import { IonTabs, IonRouterOutlet, IonTabBar, IonLabel, IonIcon, IonTabButton } from '@ionic/react';
import { homeSharp, settingsSharp } from 'ionicons/icons';
import { Route, Redirect } from 'react-router-dom';
import Tab2 from './Tab2';
import Tab3 from './Tab3';

const Tabs: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path='/app/tab2' component={Tab2} />
        <Route path='/app/tab3' component={Tab3} />
        <Route exact path="/app">
          <Redirect to="/app/tab2" /></Route>
      </IonRouterOutlet>
      <IonTabBar slot='bottom'>
        <IonTabButton tab='tab2' href="/app/tab2">
          <IonIcon icon={homeSharp} />
          <IonLabel> Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab='tab3' href="/app/tab3">
          <IonIcon icon={settingsSharp} />
          <IonLabel>Settings</IonLabel>
        </IonTabButton></IonTabBar>
    </IonTabs>
  );
};

export default Tabs;
