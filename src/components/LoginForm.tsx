import React, { useState, SyntheticEvent } from "react";
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

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState({
    protonMail: "",
    password: "",
  });

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    const url = "http://localhost:4000/auth/login";

    const config = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    try {
      const request = await fetch(url, config);
      if (request.ok) {
        const res = await request.json();
        console.log(res);
        localStorage.setItem("uid", res.id);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <IonList className="form">
      <IonImg src={logo} className="logo" />
      <IonCardTitle className="card-title">Login</IonCardTitle>
      <IonCardSubtitle className="card-subtitle">
        If you do not have an account, please sign up.
      </IonCardSubtitle>

      <IonItem className="input-group">
        <IonLabel position="stacked">
          Proton Mail <IonText color="danger">*</IonText>
        </IonLabel>
        <IonInput
          onIonChange={(e: any) =>
            setFormData({ ...formData, protonMail: e.target.value })
          }
          value={formData.protonMail}
          required
          type="text"
        ></IonInput>
      </IonItem>

      <IonItem className="input-group">
        <IonLabel position="stacked">
          Password <IonText color="danger">*</IonText>
        </IonLabel>
        <IonInput
          onIonChange={(e: any) =>
            setFormData({ ...formData, password: e.target.value })
          }
          value={formData.password}
          required
          type="password"
        ></IonInput>
      </IonItem>

      <div className="button-container">
        <IonRouterLink href="/sign-up">
          <IonText>or Sign Up</IonText>
        </IonRouterLink>

        <IonButton onClick={handleSubmit} className="login-button">
          <IonText>Login</IonText>
        </IonButton>
      </div>
    </IonList>
  );
};

export default LoginForm;
