import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonButtons,
  IonButton,
} from "@ionic/react";

import MessagesList from "../components/MessagesList";
import "./Tab1.css";
import { add } from "ionicons/icons";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Messages</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Messages</IonTitle>
            <IonButtons slot="end">
              <IonButton>
                <IonIcon slot="icon-only" icon={add} />
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>

        <MessagesList />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
