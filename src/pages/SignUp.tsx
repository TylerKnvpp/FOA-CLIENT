import React from "react";
import Layout from "../components/Layout";
import { IonContent } from "@ionic/react";
import "./Login.css";
import SignUpForm from "../components/SignUpForm";

const SignUp: React.FC = () => {
  return (
    <Layout headerDisabled pageTitle="Login">
      <IonContent fullscreen>
        {/* Form */}
        <SignUpForm />
      </IonContent>
    </Layout>
  );
};

export default SignUp;
