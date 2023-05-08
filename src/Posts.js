import Post from "./Post";

export default function Posts() {
  const users = ["meowed", "barked", "meowed"];
  return (
    <div class="posts">
      {users.map((user) => (
        <Post
          img={`assets/img/${user}.svg`}
          username={user}
          alt={user}
          media={`assets/img/${user}1.svg`}
          mediaAlt={user}
        />
      ))}
    </div>
  );
}
