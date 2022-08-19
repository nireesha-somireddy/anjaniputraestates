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
                        <IonLabel id='p-b-l-txt'> Agents Tree View</IonLabel>
                    </IonRow>
                    <IonRow>
                        <IonCol id='phase-txt'>
                            Venture
                        </IonCol>
                        <IonCol>
                            <IonList>
                                <IonItem>
                                    <IonSelect interface="popover" placeholder="Select One" id='ven-sel'>
                                        <IonSelectOption value="apples">nagababu (CGM) </IonSelectOption>
                                    </IonSelect>
                                </IonItem>
                            </IonList>
                        </IonCol>
                    </IonRow>
                    <IonRow >
                        <IonCol id='phase-txt'> Phase </IonCol><IonCol>
                            <IonList>
                                <IonItem>
                                    <IonSelect interface="popover" placeholder="Select One" id='ven-sel'>
                                        <IonSelectOption>Director</IonSelectOption>
                                        <IonSelectOption>CGM</IonSelectOption>
                                        <IonSelectOption>GM</IonSelectOption>
                                        <IonSelectOption>AGM</IonSelectOption>
                                        <IonSelectOption>SENIOR MANAGER</IonSelectOption>
                                        <IonSelectOption>MANAGER</IonSelectOption>
                                        <IonSelectOption>SENIOR EXECUTIVE</IonSelectOption>
                                        <IonSelectOption>EXECUTIVE</IonSelectOption>
                                        <IonSelectOption>BUSINESS DEVELOPMENT AGENT</IonSelectOption>
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