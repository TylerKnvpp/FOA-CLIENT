import React from "react";
import {
  IonList,
  IonInput,
  IonItem,
  IonButton,
  IonLabel,
  IonText,
  IonCardSubtitle,
  IonCardTitle,
  IonRouterLink,
  IonImg,
} from "@ionic/react";
const logo =
  "https://images.ctfassets.net/0jkr5d02o14t/49Kf10seIg5hK7YRS3bNkU/5ce21f05b2fae9ce0c873437558119f3/logo.png?h=250";

const SignUpForm: React.FC = () => {
  return (
    <IonList className="form">
      <IonImg src={logo} className="logo" />

      <IonCardTitle className="card-title">Sign Up</IonCardTitle>
      <IonCardSubtitle className="card-subtitle">
        If you have an account, please login.
      </IonCardSubtitle>

      <IonItem className="input-group">
        <IonLabel position="stacked">
          Proton Mail <IonText color="danger">*</IonText>
        </IonLabel>
        <IonInput required type="text"></IonInput>
      </IonItem>

      <IonItem className="input-group">
        <IonLabel position="stacked">
          Password <IonText color="danger">*</IonText>
        </IonLabel>
        <IonInput required type="password"></IonInput>
      </IonItem>

      <IonItem className="input-group">
        <IonLabel position="stacked">
          Reference ID <IonText color="danger">*</IonText>
        </IonLabel>
        <IonInput required type="password"></IonInput>
      </IonItem>

      <div className="button-container">
        <IonRouterLink href="/login">
          <IonText>or Login</IonText>
        </IonRouterLink>

        <IonButton className="login-button">
          <IonText>Sign Up</IonText>
        </IonButton>
      </div>
    </IonList>
  );
};

export default SignUpForm;
