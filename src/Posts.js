export default function Posts() {
  return (
    <div class="posts">
      <div data-test="post" class="post">
        <div class="topo">
          <div class="usuario">
            <img data-test="post-image" src="assets/img/meowed.svg" alt="meowed" />
            meowed
          </div>
          <div class="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>

        <div class="conteudo">
          <img data-test="post-image" src="assets/img/gato-telefone.svg" alt="gato-telefone" />
        </div>

        <div class="fundo">
          <div class="acoes">
            <div>
              <ion-icon data-test="like-post" name="heart-outline"></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon data-test="save-post" name="bookmark-outline"></ion-icon>
            </div>
          </div>

          <div class="curtidas">
            <img data-test="post-image" src="assets/img/respondeai.svg" alt="respondeai" />
            <div data-test="likes-number" class="texto">
              Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
            </div>
          </div>
        </div>
      </div>

      <div data-test="post" class="post">
        <div class="topo">
          <div class="usuario">
            <img data-test="post-image" src="assets/img/barked.svg" alt="barked" />
            barked
          </div>
          <div class="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>

        <div class="conteudo">
          <img data-test="post-image" src="assets/img/dog.svg" alt="dog" />
        </div>

        <div class="fundo">
          <div class="acoes">
            <div>
              <ion-icon data-test="like-post" name="heart-outline"></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon data-test="save-post" name="bookmark-outline"></ion-icon>
            </div>
          </div>

          <div class="curtidas">
            <img data-test="post-image" src="assets/img/adorable_animals.svg" alt="adorable_animals" />
            <div data-test="likes-number" class="texto">
              Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
