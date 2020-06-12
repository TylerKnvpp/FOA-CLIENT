import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab3.css";
import Header from "../components/Header";

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Dispatch</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Header pageTitle="Dispatch" />

        <ExploreContainer name="Dispatch page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
