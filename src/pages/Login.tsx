import React from "react";
import Layout from "../components/Layout";
import { IonContent } from "@ionic/react";
import "./Login.css";
import LoginForm from "../components/LoginForm";

const Login: React.FC = () => {
  return (
    <Layout headerDisabled pageTitle="Login">
      <IonContent fullscreen>
        {/* Form */}
        <LoginForm />
      </IonContent>
    </Layout>
  );
};

export default Login;
