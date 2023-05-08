import Suggestions from "./Suggestions";

export default function Sidebar() {
  return (
    <div class="sidebar">
      <div class="usuario">
        <img data-test="profile-image" src="assets/img/catanacomics.svg" alt="imagem de perfil" />
        <div data-test="name" class="texto">
          <span>
            <strong>catanacomics</strong>
            <ion-icon data-test="edit-name" name="pencil"></ion-icon>
          </span>
        </div>
      </div>
      <Suggestions />

      <div class="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
        Hashtags • Idioma
      </div>
      <div class="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
    </div>
  );
}
