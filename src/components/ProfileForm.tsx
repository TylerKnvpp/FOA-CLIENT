import React, { useState } from "react";
import { IonItem, IonText, IonLabel, IonButton } from "@ionic/react";

interface ProfileFormProps {
  userData: any;
  editState: boolean;
  handleEditState: () => void;
}

const ProfileForm: React.FC<ProfileFormProps> = ({
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

  // event handlers

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // const { isValid, error } = SignUpValidation(formData);

    // if (error) alert(error);

    // if (isValid) {
    console.log(formData);
    const url = `http://localhost:4000/users/${userData._id}/update`;

    const config = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
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

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <IonItem className="input-group">
        <IonLabel position="stacked">
          Proton Mail <IonText color="danger">*</IonText>
        </IonLabel>
        <input
          style={{ background: "none" }}
          name="protonMail"
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

export default ProfileForm;
