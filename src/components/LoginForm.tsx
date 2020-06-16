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

const inner_ellipsis =
  "https://images.ctfassets.net/0jkr5d02o14t/krUFgCJtyCytEk5Z5vVNa/04657b426176e7c788a8da19ca8922e0/inner_ellipsis.png?h=250";
const outer_ellipsis =
  "https://images.ctfassets.net/0jkr5d02o14t/6I9fl3iJbrPtzXK9cdMNfc/f3c907dbf54399eea6719da51a80765f/outer_ellpisis.png?h=250";

interface LoginFormProps {
  history: any;
}

const LoginForm: React.FC<LoginFormProps> = ({ history }) => {
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
        localStorage.setItem("uid", res.id);
        localStorage.setItem("userData", JSON.stringify(res));
        history.push("/messages");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <IonList className="form">
      <div className="logo_container">
        <IonImg src={inner_ellipsis} className="inner_ellipsis" />
        <IonImg src={outer_ellipsis} className="outer_ellipsis" />
      </div>

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
