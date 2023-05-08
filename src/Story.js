export default function Story(props) {
  return (
    <div class="story">
      <div class="imagem">
        <img src={props.url} alt={props.alt} />
      </div>
      <div class="usuario">{props.username}</div>
    </div>
  );
}
