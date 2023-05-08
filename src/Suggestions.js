import Suggestion from "./Suggestion";

export default function Suggestions() {
  const users = ["bad.vibes.memes", "chibirdart", "razoesparaacreditar", "adorable_animals", "smallcutecats"];
  return (
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>

      {users.map((user) => (
        <Suggestion
          imgProfile={`assets/img/${user}.svg`}
          usuario={user}
          altImg={user}
          razao={Math.random() < 0.2 ? "Segue você" : "Novo no Instagram"}
        />
      ))}
    </div>
  );
}
