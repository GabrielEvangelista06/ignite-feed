import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import "./global.css";

const posts =[
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/gabrielevangelista06.png",
      name: "Gabriel Evangelista",
      role: "CTO at Ametista e Software Engineer",
    },
    content: [
      {type: 'paragraph', text: 'Fala galeraa 👋'},
      {type: 'paragraph', text: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', text: '👉 jane.design/doctorcare'}
    ],
    publishedAt: new Date("2024-08-12 15:10:30"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @ Rocketseat",
    },
    content: [
      {type: 'paragraph', text: 'Fala galeraa 👋'},
      {type: 'paragraph', text: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', text: '👉 jane.design/doctorcare'}
    ],
    publishedAt: new Date("2024-09-12 15:10:30"),
  }
]

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        {posts.map((post => {
          return( <Post key={post.id} author={post.author} content={post.content} publishedAt={post.publishedAt} />)
        }))}
        </main>
      </div>
    </>
  );
}
