import React from "react";
import { IonHeader, IonTitle, IonToolbar } from "@ionic/react";

interface HeaderProps {
  pageTitle: string;
}

const Header: React.FC<HeaderProps> = ({ pageTitle }) => {
  return (
    <IonHeader collapse="condense">
      <IonToolbar>
        <IonTitle size="large">{pageTitle ? pageTitle : "FOA"}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
