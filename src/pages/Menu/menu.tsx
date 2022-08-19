import { IonContent, IonHeader, IonItem, IonFabButton, IonFab, IonFabList, IonList, IonSelect, IonSelectOption, IonRow, IonPage, IonButton, IonIcon, useIonRouter, IonTitle, IonToolbar } from '@ionic/react';
import { arrowBackCircle, arrowBackCircleSharp, arrowBackSharp, arrowForwardCircle } from 'ionicons/icons';
import './menu.css';

const Menu: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButton fill='clear' routerLink='/app/tab2'>
            <IonIcon icon={arrowBackSharp} id='arr-back' /></IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonButton fill='clear' id='txt2' routerLink='/plotcontrolls'> Plot Controlls &nbsp;<IonIcon icon={arrowForwardCircle}>
        </IonIcon></IonButton>
        <IonButton fill='clear' id='txt2' routerLink='/mngview'>  Management View &nbsp;<IonIcon icon={arrowForwardCircle}>
        </IonIcon></IonButton>
        <IonButton fill='clear' id='txt2' routerLink='/reports'>  Reports&nbsp;<IonIcon icon={arrowForwardCircle}>
        </IonIcon></IonButton>
        <IonButton fill='clear' id='txt2' >  Agent Commissions&nbsp;<IonIcon icon={arrowForwardCircle}>
        </IonIcon></IonButton>
        <IonButton fill='clear' id='txt2' routerLink='/master'>  Master&nbsp;<IonIcon icon={arrowForwardCircle}>
        </IonIcon></IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Menu;