import React, { useState } from "react";
import { IonItem, IonText, IonLabel, IonButton } from "@ionic/react";
// import ConfirmationModal from "./ConfirmationModal";

interface ProfileFormProps {
  userData: any;
  editState: boolean;
  handleEditState: () => void;
}

const ProfileFormWModal: React.FC<ProfileFormProps> = ({
  userData,
  editState,
  handleEditState,
}) => {
  // state
  const [formData, setFormData] = useState({
    protonMail: userData ? userData.protonMail : "",
    pin: userData.pin ? userData.pin : "",
    username: userData ? userData.username : "",
    firstName: userData.firstName ? userData.firstName : "",
    lastName: userData.lastName ? userData.lastName : "",
  });

  //   const [emailModal, setEmailModal] = useState<any>({
  //     isOpen: false,
  //     field: "",
  //     confirmed: false,
  //   });

  //   const [usernameModal, setUsernameModal] = useState<any>({
  //     isOpen: false,
  //     field: "",
  //     confirmed: false,
  //   });

  //   const [pinModal, setPinModal] = useState<any>({
  //     isOpen: false,
  //     field: "",
  //     confirmed: false,
  //   });

  // event handlers

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // const { isValid, error } = SignUpValidation(formData);

    // if (error) alert(error);

    // if (isValid) {
    const url = `http://localhost:4000/users/${userData._id}/update`;

    const config = {
      method: "POST",
      body: JSON.stringify(formData),
    };

    try {
      const request = await fetch(url, config);
      if (request.ok) {
        const res = await request.json();
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
    // }
  };

  //   const handleCloseEmailModal = () => {
  //     setEmailModal({ ...emailModal, isOpen: false });
  //   };

  //   const handleCloseUsernameModal = () => {
  //     setEmailModal({ ...usernameModal, isOpen: false });
  //   };

  //   const handleClosePinModal = () => {
  //     setEmailModal({ ...pinModal, isOpen: false });
  //   };

  //   const handleEmailConfirm = () => {
  //     console.log("email should be confirmed");
  //     setEmailModal({ ...emailModal, confirmed: true });
  //   };

  //   const handleUsernameConfirm = () => {
  //     setUsernameModal({ ...usernameModal, confirmed: true });
  //   };

  //   const handlePinConfirm = () => {
  //     setPinModal({ ...pinModal, confirmed: true });
  //   };

  //   const handleEmailClick = () => {
  //     if (!emailModal.confirmed) {
  //       setEmailModal({ isOpen: true, field: "Proton Mail" });
  //     }
  //     return;
  //   };

  //   const handleEmailOnChange = (e: any) => {
  //     if (emailModal.confirmed) {
  //       setFormData({ ...formData, protonMail: e.target.value });
  //     }
  //   };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      {/* {!emailModal.isOpen ? ( */}
      <IonItem className="input-group">
        <IonLabel position="stacked">
          Proton Mail <IonText color="danger">*</IonText>
        </IonLabel>
        <input
          style={{ background: "none" }}
          name="protonMail"
          // onClick={handleEmailClick}
          className="input"
          onChange={(e: any) => {
            setFormData({ ...formData, protonMail: e.target.value });
          }}
          value={formData.protonMail}
          required
          type="text"
          disabled={!editState ? true : false}
        />
      </IonItem>
      {/* //   ) : (
    //     <ConfirmationModal
          handleConfirm={handleEmailConfirm}
          isOpen={emailModal.isOpen}
          fieldTitle={emailModal.field}
          handleCloseModal={handleCloseEmailModal}
        />
      )} */}

      {/* {!usernameModal.isOpen ? ( */}
      <IonItem className="input-group">
        <IonLabel position="stacked">
          Username <IonText color="danger">*</IonText>
        </IonLabel>
        <input
          style={{ background: "none" }}
          className="input"
          onChange={(e: any) => {
            setFormData({ ...formData, username: e.target.value });
          }}
          value={formData.username}
          required
          type="text"
          disabled={!editState ? true : false}
        />
      </IonItem>
      {/* ) : (
        <ConfirmationModal
          handleConfirm={handleUsernameConfirm}
          isOpen={usernameModal.isOpen}
          fieldTitle={usernameModal.field}
          handleCloseModal={handleCloseUsernameModal}
        />
      )} */}

      {/* {!pinModal.isOpen ? ( */}
      <IonItem className="input-group">
        <IonLabel position="stacked">
          Pin <IonText color="danger">*</IonText>
        </IonLabel>
        <input
          style={{ background: "none" }}
          className="input"
          onChange={(e: any) => {
            setFormData({ ...formData, pin: e.target.value });
          }}
          value={formData.pin}
          required
          type="password"
          disabled={!editState ? true : false}
        />
      </IonItem>
      {/* ) : (
        <ConfirmationModal
          handleConfirm={handlePinConfirm}
          isOpen={pinModal.isOpen}
          fieldTitle={pinModal.field}
          handleCloseModal={handleClosePinModal}
        />
      )} */}

      <IonItem className="input-group">
        <IonLabel position="stacked">First Name</IonLabel>
        <input
          style={{ background: "none" }}
          className="input"
          onChange={(e: any) => {
            setFormData({ ...formData, firstName: e.target.value });
          }}
          value={formData.firstName}
          required
          type="text"
          disabled={!editState ? true : false}
        />
      </IonItem>

      <IonItem className="input-group">
        <IonLabel position="stacked">Last Name</IonLabel>
        <input
          style={{ background: "none" }}
          className="input"
          onChange={(e: any) => {
            setFormData({ ...formData, lastName: e.target.value });
          }}
          value={formData.lastName}
          required
          type="text"
          disabled={!editState ? true : false}
        />
      </IonItem>
      {editState ? (
        <IonButton
          color="primary"
          onClick={handleEditState}
          className="save-button"
          onSubmit={(e: any) => handleSubmit(e)}
          type="submit"
        >
          <IonLabel>Save</IonLabel>
        </IonButton>
      ) : (
        <IonButton
          onClick={handleEditState}
          color="medium"
          className="edit-button"
        >
          <IonLabel>Edit</IonLabel>
        </IonButton>
      )}
    </form>
  );
};

export default ProfileFormWModal;
