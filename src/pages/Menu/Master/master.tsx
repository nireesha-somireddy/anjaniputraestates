import { IonContent, IonHeader, IonGrid, IonLabel, IonCol, IonRow, IonCard, IonPage, IonButton, IonIcon, IonToolbar, IonList, IonItem, IonSelect, IonSelectOption } from '@ionic/react';
import { arrowBackSharp, moveSharp } from 'ionicons/icons';

const Agenttreeviewreport: React.FC = () => {
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
                                <IonLabel id='plot-txt'> Add Agent</IonLabel></IonCol><IonCol size='2.5'>
                                <IonButton fill='clear' routerLink='/app/tab2'>
                                    <IonIcon icon={moveSharp} id='arr-back' /></IonButton>
                            </IonCol></IonRow></IonGrid>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonGrid>
                    
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Agenttreeviewreport;