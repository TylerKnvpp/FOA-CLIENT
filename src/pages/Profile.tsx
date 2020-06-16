import React, { useEffect, useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonImg,
  IonButtons,
  IonButton,
  IonText,
} from "@ionic/react";

import { fetchUserData } from "../hooks/fetchUserProfile";
import "./Profile.css";

import Avatar from "../components/Avatar";

interface ProfileProps {
  history: any;
}

const Tab1: React.FC<ProfileProps> = ({ history }) => {
  const [uidState, setUID] = useState<string>("");
  const [userData, setUserData] = useState<any>();
  const [errorState, setErrorState] = useState<any>();

  const inner_ellipsis =
    "https://images.ctfassets.net/0jkr5d02o14t/krUFgCJtyCytEk5Z5vVNa/04657b426176e7c788a8da19ca8922e0/inner_ellipsis.png?h=250";
  const outer_ellipsis =
    "https://images.ctfassets.net/0jkr5d02o14t/6I9fl3iJbrPtzXK9cdMNfc/f3c907dbf54399eea6719da51a80765f/outer_ellpisis.png?h=250";

  useEffect(() => {
    const uid = localStorage.getItem("uid");
    if (uid && !uidState) setUID(uid);
  }, [uidState]);

  useEffect(() => {
    if (uidState && !userData) {
      fetchUserData(uidState)
        .then((res) => {
          if (res.success && !userData) console.log(res.user);
          if (res.success) {
            setUserData(res.user);
          }
        })
        .catch((err) => {
          if (!err.success) {
            setErrorState(err);
          }
        });
    }
  });

  const handleLogout = () => {
    localStorage.clear();
    history.push("/login");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Profile</IonTitle>
          <IonButtons slot="end">
            <IonButton>
              <IonText onClick={handleLogout}>Logout</IonText>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {/* Avatar */}
        {userData ? (
          <Avatar
            // imageURL={`${userData.profilePicture}`}
            imageURL=""
            userID={userData._id}
          />
        ) : (
          <div className="logo-container">
            <IonImg src={inner_ellipsis} className="inner-ellipsis" />
            <IonImg src={outer_ellipsis} className="outer-ellipsis" />
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
