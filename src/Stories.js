import Story from "./Story";

export default function Stories() {
  const users = [
    "9gag",
    "meowed",
    "barked",
    "nathanwpylestrangeplanet",
    "wawawicomics",
    "respondeai",
    "filomoderna",
    "memeriagourmet",
  ];

  return (
    <div class="stories">
      {users.map((user) => (
        <Story url={`assets/img/${user}.svg`} username={user} />
      ))}

      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}
