import React from "react";
import Layout from "../components/Layout";
import { IonContent } from "@ionic/react";
import "./Login.css";
import LoginForm from "../components/LoginForm";

interface LoginProps {
  history: any;
}

const Login: React.FC<LoginProps> = ({ history }) => {
  return (
    <Layout headerDisabled pageTitle="Login">
      <IonContent fullscreen>
        {/* Form */}
        <LoginForm history={history} />
      </IonContent>
    </Layout>
  );
};

export default Login;
