import { IonContent, IonHeader, IonPage, IonCol, IonTitle,useIonRouter, IonToolbar, IonGrid, IonImg, IonRow, IonInput, IonButton } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import './Login.css';

const Login: React.FC = () => {
  const navigation = useIonRouter()
  const doLogin =() =>{
     navigation.push('/app','root','replace')
  }
  return (
    <IonPage>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonImg src="../assets/images/icon.jpg" className='logo-cls'>{" "}</IonImg>
          </IonRow>
          <IonRow className='input-login'>
            <IonInput class="input" placeholder="Your Email"/>
          </IonRow>
          <IonRow className='input-login1'>
            <IonInput class="input" placeholder="password"/>
          </IonRow>
          <IonRow >
            <IonCol id='txt-pswd'>Forgot password?</IonCol>
          </IonRow>
          <IonRow>
            <IonButton fill='clear' id='btn-signin' onClick={() => doLogin()}>sign In</IonButton>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Login;