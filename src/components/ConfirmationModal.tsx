import React from "react";
import {
  IonModal,
  IonTitle,
  IonCardSubtitle,
  IonHeader,
  IonButton,
  IonLabel,
  IonToolbar,
  IonIcon,
  IonContent,
} from "@ionic/react";

import { warningOutline } from "ionicons/icons";

interface ConfirmationModalProps {
  fieldTitle: string;
  isOpen: boolean;
  handleCloseModal: () => void;
  handleConfirm: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  fieldTitle,
  handleCloseModal,
  handleConfirm,
}) => {
  return (
    <IonModal isOpen={isOpen}>
      <IonHeader className="modal-header">
        <IonToolbar>
          <IonTitle>Confirm</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="modal-card">
        <IonIcon icon={warningOutline} className="warning" />
        <IonCardSubtitle className="modal-title">
          You are editing {fieldTitle ? fieldTitle : "your sign in credentials"}
          , are you sure you want to change it?
        </IonCardSubtitle>

        <div className="modal-button-container">
          <IonButton
            color="primary"
            className="modal-button"
            onClick={() => {
              handleConfirm();
              handleCloseModal();
            }}
          >
            <IonLabel>Confirm</IonLabel>
          </IonButton>

          <IonButton
            color="danger"
            onClick={handleCloseModal}
            className="modal-button"
          >
            <IonLabel>Close</IonLabel>
          </IonButton>
        </div>
      </IonContent>
    </IonModal>
  );
};

export default ConfirmationModal;
