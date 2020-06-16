import React, { useState } from "react";
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
import { SignUpValidation } from "../validation/SignUpValidation";

interface SignUpFormProps {
  // onLoggedIn: (input: boolean) => void;
  history: any;
}

const inner_ellipsis =
  "https://images.ctfassets.net/0jkr5d02o14t/krUFgCJtyCytEk5Z5vVNa/04657b426176e7c788a8da19ca8922e0/inner_ellipsis.png?h=250";
const outer_ellipsis =
  "https://images.ctfassets.net/0jkr5d02o14t/6I9fl3iJbrPtzXK9cdMNfc/f3c907dbf54399eea6719da51a80765f/outer_ellpisis.png?h=250";

const SignUpForm: React.FC<SignUpFormProps> = ({ history }) => {
  const [formData, setFormData] = useState({
    protonMail: "",
    password: "",
    referenceID: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    console.log(formData);

    const { isValid, error } = SignUpValidation(formData);

    if (error) alert(error);

    if (isValid) {
      const url = "http://localhost:4000/auth/sign-up";

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
          localStorage.setItem("uid", res.user._id);
          history.push("/messages");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <IonList className="form">
      <div className="logo_container">
        <IonImg src={inner_ellipsis} className="inner_ellipsis" />
        <IonImg src={outer_ellipsis} className="outer_ellipsis" />
      </div>

      <IonCardTitle className="card-title">Sign Up</IonCardTitle>
      <IonCardSubtitle className="card-subtitle">
        If you have an account, please login.
      </IonCardSubtitle>

      <IonItem className="input-group">
        <IonLabel position="stacked">
          Proton Mail <IonText color="danger">*</IonText>
        </IonLabel>
        <IonInput
          required
          type="text"
          onIonChange={(e: any) =>
            setFormData({ ...formData, protonMail: e.target.value })
          }
          value={formData.protonMail}
        ></IonInput>
      </IonItem>

      <IonItem className="input-group">
        <IonLabel position="stacked">
          Password <IonText color="danger">*</IonText>
        </IonLabel>
        <IonInput
          required
          type="password"
          onIonChange={(e: any) =>
            setFormData({ ...formData, password: e.target.value })
          }
          value={formData.password}
        />
      </IonItem>

      <IonItem className="input-group">
        <IonLabel position="stacked">
          Reference ID <IonText color="danger">*</IonText>
        </IonLabel>
        <IonInput
          required
          type="password"
          onIonChange={(e: any) =>
            setFormData({ ...formData, referenceID: e.target.value })
          }
          value={formData.referenceID}
        ></IonInput>
      </IonItem>

      <div className="button-container">
        <IonRouterLink href="/login">
          <IonText>or Login</IonText>
        </IonRouterLink>

        <IonButton onClick={handleSubmit} className="login-button">
          <IonText>Sign Up</IonText>
        </IonButton>
      </div>
    </IonList>
  );
};

export default SignUpForm;
