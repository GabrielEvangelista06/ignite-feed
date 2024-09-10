import { Header } from "./components/Header";
import { Post } from "./Post";
import "./styles.css";

export function App() {
  return (
    <>
      <Header />
      <h1>Hello World!</h1>
      <Post
        author="Gabriel Evangelista"
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla eius perferendis nesciunt sunt! Explicabo sunt soluta ullam aut dicta perferendis repudiandae exercitationem. Facilis sequi nobis quam praesentium illum deleniti non."
      />
      <Post
        author="Claudete Morais"
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla eius perferendis nesciunt sunt! Explicabo sunt soluta ullam aut dicta perferendis repudiandae exercitationem. Facilis sequi nobis quam praesentium illum deleniti non."
      />
    </>
  );
}
