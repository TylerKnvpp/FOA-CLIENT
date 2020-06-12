import React from "react";
import {
  IonRouterLink,
  IonList,
  IonItem,
  IonLabel,
  IonItemSliding,
  IonItemOption,
  IonItemOptions,
  IonContent,
  IonText,
} from "@ionic/react";

const MessagesList: React.FC = () => {
  let arr: any = [
    {
      id: "1",
      username: "Tyler",
      message: "Lorem ipsum dolor, dolor ipsum lorem lorem ipsum dolor.",
    },
    { id: "2", username: "Anne", message: "Where are you" },
    { id: "3", username: "Bill", message: "We need to get this up asap." },
    { id: "4", username: "George", message: "Where are you" },
  ];

  return (
    <IonContent>
      <IonList>
        <IonItemSliding>
          {arr.map((obj: any) => {
            return (
              <IonItem key={obj.id}>
                <IonRouterLink color={"dark"} href={`/messages/${obj.id}`}>
                  <IonLabel>
                    <IonText>
                      <h2 className="username">{obj.username}</h2>
                    </IonText>

                    <h3>{obj.message}</h3>
                  </IonLabel>
                </IonRouterLink>
              </IonItem>
            );
          })}

          {/* 
        <IonItem>
          <IonLabel>
            <h2>Tyler</h2>
            <h3>We need to get this up and running asap</h3>
          </IonLabel>
        </IonItem>

        <IonItem>
          <IonLabel>
            <h2>Tyler</h2>
            <h3>We need to get this up and running asap</h3>
          </IonLabel>
        </IonItem> */}
          <IonItemOptions side="end">
            <IonItemOption onClick={() => {}}>Unread</IonItemOption>
          </IonItemOptions>
        </IonItemSliding>
      </IonList>
    </IonContent>
  );
};

export default MessagesList;
