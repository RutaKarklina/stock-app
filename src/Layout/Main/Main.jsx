import * as styles from './Main.module.scss';
import Header from '../../Components/Header/Header';
import Navigation from '../../Components/Navigation/Navigation';


function Main({ children }) {
  return (
    <div className={styles.appContainer}>
      <div className={styles.headerContainer}>
        <Header />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.navigationContainer}>
          <Navigation />
        </div>
        <main className={styles.mainContainer}>
          {children}
        </main>
      </div>

    </div>
  );
}

export default Main;