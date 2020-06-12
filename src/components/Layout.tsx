import React from "react";
import { IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";

interface LayoutChildren {
  children: any;
  pageTitle: String;
  headerDisabled: Boolean;
}

const Layout: React.FC<LayoutChildren> = ({
  children,
  pageTitle,
  headerDisabled,
}) => {
  return (
    <IonPage>
      {!headerDisabled ? (
        <IonHeader>
          <IonToolbar>
            <IonTitle>{pageTitle ? pageTitle : null}</IonTitle>
          </IonToolbar>
        </IonHeader>
      ) : null}

      {children}
    </IonPage>
  );
};

export default Layout;
