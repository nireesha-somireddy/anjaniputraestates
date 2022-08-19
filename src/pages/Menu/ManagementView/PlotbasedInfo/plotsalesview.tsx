import { IonContent, IonHeader, IonGrid, IonLabel, IonCol, IonRow, IonPage, IonButton, IonIcon, IonToolbar, IonList, IonItem, IonSelect, IonSelectOption } from '@ionic/react';
import { arrowBackSharp, moveSharp } from 'ionicons/icons';
import './plotsalesview.css';

const Plotsalesview: React.FC = () => {
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
                                <IonLabel id='plot-txt'> Plot Sales View</IonLabel></IonCol><IonCol size='2.5'>
                                <IonButton fill='clear' routerLink='/app/tab2'>
                                    <IonIcon icon={moveSharp} id='arr-back' /></IonButton>
                            </IonCol></IonRow></IonGrid>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonGrid>
                    <IonRow>
                        <IonLabel id='p-b-l-txt'> Plot Sales</IonLabel>
                    </IonRow>
                    <IonRow>
                        <IonCol id='phase-txt'>
                            Venture
                        </IonCol>
                        <IonCol>
                            <IonList>
                                <IonItem>
                                    <IonSelect interface="popover" placeholder="Select One" id='ven-sel'>
                                        <IonSelectOption value="apples">highway city</IonSelectOption>
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
                                        <IonSelectOption>phase1</IonSelectOption>
                                        <IonSelectOption>phase2</IonSelectOption>
                                        <IonSelectOption value="apples">phase3</IonSelectOption>
                                    </IonSelect>
                                </IonItem>
                            </IonList>
                        </IonCol>
                    </IonRow>
                    <IonRow> <IonButton fill='clear' expand='full' id='submit-btn'> Submit</IonButton></IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Plotsalesview;