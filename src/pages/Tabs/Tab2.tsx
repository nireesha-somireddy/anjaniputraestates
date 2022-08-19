import { IonContent, IonHeader, IonGrid, IonLabel, IonCard, IonRow, IonPage, IonButton, IonIcon, useIonRouter, IonTitle, IonToolbar } from '@ionic/react';
import { arrowForward, arrowForwardCircle, menuSharp, playForwardSharp } from 'ionicons/icons';
import ExploreContainer from '../../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButton fill='clear'  routerLink='/menu'>
            <IonIcon icon={menuSharp} color='dark' id='menu' >
            </IonIcon></IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent className='content-dashboard'>
        <IonGrid className='card-data'>
          <IonRow>
            <IonLabel id='txt' >80000</IonLabel>
          </IonRow>
          <IonRow>
            <IonLabel id='txt' >Today payments</IonLabel>
          </IonRow>
          <IonRow><IonButton fill='clear' id='txt'> More info &nbsp;<IonIcon icon={arrowForwardCircle}>
          </IonIcon></IonButton>

          </IonRow>

        </IonGrid>
        <IonGrid className='card-data'>
          <IonRow>
            <IonLabel id='txt' >1</IonLabel>
          </IonRow>
          <IonRow>
            <IonLabel id='txt' >Today plot Sales</IonLabel>
          </IonRow>
          <IonRow><IonButton fill='clear' id='txt'> More info &nbsp;<IonIcon icon={arrowForwardCircle}>
          </IonIcon></IonButton>
          </IonRow>
        </IonGrid>

      </IonContent>
    </IonPage>
  );
};

export default Tab2;
