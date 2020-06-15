import React, { useEffect } from "react";
import {
  IonButtons,
  IonPage,
  IonContent,
  IonBackButton,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

interface MessageProps {
  // username: String;
  // message: String;
  history: any;
}

const Message: React.FC<MessageProps> = ({ history }) => {
  let message: any = {
    id: "1",
    username: "Tyler",
    message: "Lorem ipsum dolor, dolor ipsum lorem lorem ipsum dolor.",
  };

  useEffect(() => {
    fetch("https://dry-ravine-80584.herokuapp.com/polls/")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <IonPage>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton defaultHref="/" />
        </IonButtons>
        <IonTitle>{message.username}</IonTitle>
      </IonToolbar>
      <IonContent></IonContent>
    </IonPage>
  );
};

export default Message;
