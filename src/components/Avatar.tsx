import React from "react";
import { IonImg, IonContent, IonText, IonAvatar } from "@ionic/react";

interface AvatarProps {
  imageURL: String;
}

const Avatar: React.FC<AvatarProps> = ({ imageURL }) => {
  const placeholder =
    "https://images.ctfassets.net/0jkr5d02o14t/4Tsq7upvRUHBdW4HwzeNEy/7f140b351543035dae54015d634c0df4/placeholder.png?h=250";
  return (
    <div>
      <IonAvatar className="avatar">
        <img src={imageURL ? `${imageURL}` : `${placeholder}`} alt="avatar" />
      </IonAvatar>
      <IonText>
        <h5 className="edit-pic">Change Profile Picture</h5>
      </IonText>
    </div>
  );
};

export default Avatar;
