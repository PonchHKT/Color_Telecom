import styles from '../styles/Home.module.scss';
import Navbar from '../components/Navbar';

export default function Home() {

  return (
    <div className={styles.pageContainer}>

        <Navbar/>

      <div className={styles.todoListContainer}>

        <div className={styles.todoListBox}>

          <div className={styles.header}>
            <h1>Liste des tâches</h1><i class="fad fa-clipboard-list"></i>
          </div>

      <div className={styles.todoListItems}>

      <div className={styles.todoListForms}>
        <form>
          <input type="text" placeholder="Ajouter une tâche .." id="item" autoComplete="off" minLength="2" />
        </form>
      </div>

      <div className={styles.todoListTasks}>
        <ul id="list">
        </ul>
      </div>

      </div>

      <div className={styles.todoListAddTasks}>
            <div className={styles.buttonContainer}>
                <i class="fad fa-plus-hexagon"></i>
            </div>

          </div>

        </div>

      </div>
      <script src="./script.js" type="text/javascript"></script>
    </div>
  )
}
