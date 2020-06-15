import React from "react";
import Layout from "../components/Layout";
import { IonContent } from "@ionic/react";
import "./Login.css";
import SignUpForm from "../components/SignUpForm";

interface LoginProps {
  history: any;
}

const SignUp: React.FC<LoginProps> = ({ history }) => {
  return (
    <Layout headerDisabled pageTitle="Login">
      <IonContent fullscreen>
        {/* Form */}
        <SignUpForm history={history} />
      </IonContent>
    </Layout>
  );
};

export default SignUp;
