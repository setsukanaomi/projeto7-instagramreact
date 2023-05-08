import React from "react";

export default function User(props) {
  const [userLogged, setUser] = React.useState("catanacomics");
  const [profilePic, setProfileImg] = React.useState("assets/img/catanacomics.svg");

  function changeUser() {
    const newUsername = prompt("Insira seu novo nome de usuário.");
    if (!newUsername) {
      return;
    }
    setUser(newUsername);
  }

  function imgProfile() {
    const profileImg = prompt("Insira o link da sua nova foto.");
    if (!profileImg) {
      return;
    }
    setProfileImg(profileImg);
  }

  return (
    <div class="usuario">
      <img data-test="profile-image" onClick={imgProfile} src={profilePic} alt="Nome de usuário" />
      <div class="texto">
        <span>
          <strong data-test="name">{userLogged}</strong>
          <ion-icon data-test="edit-name" name="pencil" onClick={changeUser}></ion-icon>
        </span>
      </div>
    </div>
  );
}
