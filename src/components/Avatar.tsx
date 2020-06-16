import React, { useState } from "react";
import { IonText, IonAvatar } from "@ionic/react";

interface AvatarProps {
  imageURL: string;
  userID: string;
}

const Avatar: React.FC<AvatarProps> = ({ imageURL, userID }) => {
  const [url, setURL] = useState<any>(
    "https://images.ctfassets.net/0jkr5d02o14t/4Tsq7upvRUHBdW4HwzeNEy/7f140b351543035dae54015d634c0df4/placeholder.png?h=250"
  );
  const [changeProfilePicture, setChangeProfilePicture] = useState<boolean>(
    false
  );
  //   const [upload, setUpload] = useState<any>();

  const placeholder =
    "https://images.ctfassets.net/0jkr5d02o14t/4Tsq7upvRUHBdW4HwzeNEy/7f140b351543035dae54015d634c0df4/placeholder.png?h=250";

  if (imageURL && url === placeholder) {
    setURL(imageURL);
  }

  const handleFileUpload = async (file: any) => {
    const imageData = new FormData();
    imageData.append("image", file);

    const url = `http://localhost:4000/users/${userID}/add-profile-picture`;

    const config = {
      method: "POST",
      body: imageData,
    };

    try {
      const req = await fetch(url, config);
      if (req.ok) {
        const res = await req.json();
        console.log(res);
        if (res.success) {
          setURL(res.user.profilePicture);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <IonAvatar className="avatar">
        <img src={`${url}`} alt="avatar" />
      </IonAvatar>
      <form className="image-upload-container">
        {changeProfilePicture ? (
          <input
            name="profilePicture"
            type="file"
            accept="image/png, image/jpeg"
            onChange={(e: any) => {
              handleFileUpload(e.target.files ? e.target.files[0] : url);
            }}
          />
        ) : null}
        <IonText>
          <h5
            className="edit-pic"
            onClick={() => setChangeProfilePicture(!changeProfilePicture)}
          >
            Change Profile Picture
          </h5>
        </IonText>
      </form>
    </div>
  );
};

export default Avatar;
