import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import "./global.css";

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Gabriel Evangelista"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla eius perferendis nesciunt sunt! Explicabo sunt soluta ullam aut dicta perferendis repudiandae exercitationem. Facilis sequi nobis quam praesentium illum deleniti non."
          />
          <Post
            author="Claudete Morais"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla eius perferendis nesciunt sunt! Explicabo sunt soluta ullam aut dicta perferendis repudiandae exercitationem. Facilis sequi nobis quam praesentium illum deleniti non."
          />
        </main>
      </div>
    </>
  );
}
