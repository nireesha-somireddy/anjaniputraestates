import { IonContent, IonHeader, IonPage, IonButton, IonIcon, IonToolbar, IonGrid, IonCol, IonRow, IonLabel } from '@ionic/react';
import { arrowBackSharp, arrowForwardCircle,moveSharp } from 'ionicons/icons';


const Mngview: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
            <IonToolbar>
                    <IonGrid>
                        <IonRow>
                            <IonCol size='2'>
                                <IonButton fill='clear' routerLink='/menu'>
                                    <IonIcon icon={arrowBackSharp} id='arr-back' /></IonButton></IonCol>
                            <IonCol size='7.5'>
                                <IonLabel id='plot-txt'> Management View</IonLabel></IonCol><IonCol size='2.5'>
                                <IonButton fill='clear' routerLink='/app/tab2'>
                                    <IonIcon icon={moveSharp} id='arr-back' /></IonButton>
                            </IonCol></IonRow></IonGrid>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonButton fill='clear' id='txt2'> Agent Uplevel &nbsp;<IonIcon icon={arrowForwardCircle}>
                </IonIcon></IonButton>
                <IonButton fill='clear' id='txt2' routerLink='/plotsalesview' >  Plot based Info&nbsp;<IonIcon icon={arrowForwardCircle}>
                </IonIcon></IonButton>
                <IonButton fill='clear' id='txt2'>  Employees List&nbsp;<IonIcon icon={arrowForwardCircle}>
                </IonIcon></IonButton>
                <IonButton fill='clear' id='txt2'> Customer Details&nbsp;<IonIcon icon={arrowForwardCircle}>
                </IonIcon></IonButton>
            </IonContent>
        </IonPage>
    );
};

export default Mngview;