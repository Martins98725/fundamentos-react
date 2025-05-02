import { Header } from "./components/header";
import { Post } from "./post";
import "./global.css";
import styles from "./App.module.css";
import { SideBar } from "./components/SideBar";
export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <SideBar/>
        <main>
          <Post content="asbdhdbashdbhasdbashdbashdbashb" author="icaro" />
          <Post content="dasdadsdaddsd" author="teste" />
        </main>
      </div>
    </>
  );
}
