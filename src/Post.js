import React from "react";

export default function Post(props) {
  let [like, setLike] = React.useState(Math.floor(Math.random() * 100000) + 100000);
  const [bookmarks, setBookmarks] = React.useState(false);
  const actualBookmark = bookmarks ? "bookmark" : "bookmark-outline";

  const [hearts, setHearts] = React.useState(false);
  const actualHearts = hearts ? "heart" : "heart-outline";
  const [heartsColor, setHeartsColors] = React.useState(false);
  const actualHeartColor = heartsColor ? "redHeart" : "blackHeart";

  function postLike() {
    setHearts(!hearts);
    setHeartsColors(!heartsColor);
    if (!hearts) {
      setLike(like + 1);
    } else {
      setLike(like - 1);
    }
  }

  function likeImg() {
    if (actualHearts === "heart-outline") {
      postLike();
    }
  }

  return (
    <div data-test="post" class="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.img} alt={props.alt} />
          {props.username}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img data-test="post-image" onClick={likeImg} src={props.media} alt={props.mediaAlt} />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon data-test="like-post" onClick={postLike} name={actualHearts} class={actualHeartColor}></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon data-test="save-post" onClick={() => setBookmarks(!bookmarks)} name={actualBookmark}></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src="assets/img/catanacomics.svg" alt="catanacomics" />
          <div class="texto">
            Curtido por <strong>catanacomics</strong> e{" "}
            <strong>
              outras{" "}
              <span data-test="likes-number">
                {like.toLocaleString("pt-BR", {
                  Minimum: 0,
                  Maximum: 2,
                })}{" "}
              </span>
              pessoas
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
}
