import { IonContent, IonHeader, IonGrid, IonLabel, IonCol, IonRow, IonPage, IonButton, IonIcon, IonToolbar, IonList, IonItem, IonSelect, IonSelectOption } from '@ionic/react';
import { arrowBackSharp, moveSharp } from 'ionicons/icons';
import './plotcontrolls.css';
const Agenttreeviewreport: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonGrid>
                        <IonRow>
                            <IonCol size='2'>
                                <IonButton fill='clear' routerLink='/app/tab2'>
                                    <IonIcon icon={arrowBackSharp} id='arr-back' /></IonButton></IonCol>
                            <IonCol size='7.5'>
                                <IonLabel id='plot-txt'> Plot Booking</IonLabel></IonCol><IonCol size='2.5'>
                                <IonButton fill='clear' routerLink='/app/tab2'>
                                    <IonIcon icon={moveSharp} id='arr-back' /></IonButton>
                            </IonCol></IonRow></IonGrid>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonGrid>
                    <IonRow>
                        <IonLabel id='p-b-l-txt'> Agent Report</IonLabel>
                    </IonRow>
                    <IonRow>
                        <IonCol id='phase-txt'>
                          Agent 
                        </IonCol>
                        <IonCol>
                            <IonList>
                                <IonItem>
                                    <IonSelect interface="popover" placeholder="Select One" id='ven-sel'>
                                        <IonSelectOption value="persons">nagababu (APE00002) </IonSelectOption>
                                    </IonSelect>
                                </IonItem>
                            </IonList>
                        </IonCol>
                    </IonRow>     
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Agenttreeviewreport;