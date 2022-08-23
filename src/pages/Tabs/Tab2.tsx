import { IonContent, IonHeader, IonGrid, IonLabel, IonCard, IonRow, IonPage, IonButton, IonIcon, useIonRouter, IonTitle, IonToolbar } from '@ionic/react';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
         <IonLabel id='dashboard-page'> Dashboard</IonLabel>
        </IonToolbar>
      </IonHeader>
      <IonContent className='content-dashboard'>
        <IonGrid className='card-data'>
          <IonRow>
            <IonLabel id='txt'> My Booked plots</IonLabel>
          </IonRow>
          <IonRow>
            <IonLabel id='txt' >22</IonLabel>
          </IonRow>
        </IonGrid>
        <IonGrid className='card-data'>
          <IonRow>
            <IonLabel id='txt'> My tree Booked plots</IonLabel>
          </IonRow>
          <IonRow>
            <IonLabel id='txt' >55</IonLabel>
          </IonRow>
        </IonGrid>

        <IonGrid className='card-data'>
          <IonRow>
            <IonLabel id='txt' >My Commision</IonLabel>
          </IonRow>
          <IonRow>
            <IonLabel id='txt' >2,55,186</IonLabel>
          </IonRow>
        </IonGrid>
        <IonGrid className='card-data'>
          <IonRow>
            <IonLabel id='txt' >My Received Commission</IonLabel>
          </IonRow>
          <IonRow>
            <IonLabel id='txt' >25,000</IonLabel>
          </IonRow>
        </IonGrid>
        <IonGrid className='card-data'>
          <IonRow>
            <IonLabel id='txt' >Remaining Commission</IonLabel>
          </IonRow>
          <IonRow>
            <IonLabel id='txt'>2,30,186</IonLabel>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
