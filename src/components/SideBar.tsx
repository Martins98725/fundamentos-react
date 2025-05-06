import { PencilLine } from "phosphor-react";

import styles from "./SideBar.module.css";

export function SideBar() {
  return (
    <aside className={styles.sideBar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGV2ZWxvcGVyfGVufDB8fDB8fHww"
        alt=""
      />
      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://avatars.githubusercontent.com/u/114537757?v=4"
        />
        <strong>Ícaro Martins</strong>
        <span>Backend developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar perfil
        </a>
      </footer>
    </aside>
  );
}
