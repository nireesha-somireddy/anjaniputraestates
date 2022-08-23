import { IonContent, IonHeader, IonPage,IonIcon, IonTitle, IonToolbar,IonGrid, IonRow, IonCol, IonImg, IonButton } from '@ionic/react';
import { squareSharp } from 'ionicons/icons';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle id='plot-av-txt'>Plot Availability</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
<IonGrid> 
  <IonRow>
    <IonCol>
      <IonIcon icon={squareSharp} color='success'> </IonIcon>&nbsp;
      Available Plots: 343
    </IonCol>
  </IonRow>
  <IonRow>
    <IonCol>
    <IonIcon icon={squareSharp} color='warning'> </IonIcon>&nbsp;
      Allotted Plots: 1
    </IonCol>
  </IonRow>
  <IonRow>
    <IonCol>
    <IonIcon icon={squareSharp} color='danger'> </IonIcon>&nbsp;
      Booked: 13
    </IonCol>
  </IonRow>
  <IonRow>   <IonImg src="../assets/images/plot.jpg" className="mapimg"></IonImg></IonRow>
  <IonRow>
     <IonCol>
      <IonButton href='http://www.anjaniputraestates.com/' fill='clear' id='site-btn'>visit site</IonButton>
    </IonCol> 
  </IonRow>
</IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
