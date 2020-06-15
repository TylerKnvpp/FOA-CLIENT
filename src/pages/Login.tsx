import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { IonContent } from "@ionic/react";
import "./Login.css";
import LoginForm from "../components/LoginForm";
import { Redirect } from "react-router";

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
