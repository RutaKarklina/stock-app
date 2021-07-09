import * as styles from './Main.module.scss';
import Header from '../../Components/Header/Header';
import Navigation from '../../Components/Navigation/Navigation';
import MenuButton from '../../Components/MenuButton/MenuButton';
import Button from '../../Components/Button/Button';
import Search from '../../Components/Search/Search';
import { ReactComponent as HomeIcon } from '../../Images/HomeIcon.svg';
import { ReactComponent as StarIcon } from '../../Images/StarIcon.svg';
import { ReactComponent as SettingsIcon } from '../../Images/SettingsIcon.svg';
import { ReactComponent as NotificationIcon } from '../../Images/NotificationIcon.svg';

function Main({ children }) {
  return (
    <div className={styles.appContainer}>
      <div className={styles.navigationContainer}>
        <Navigation>
          <div className={styles.logoContainer}>STOCK APP</div>
          <div className={styles.navigationContent}>
            <MenuButton className={styles.navigationItem}
              Logo={HomeIcon}
              text="Home" />
            <MenuButton className={styles.navigationItem}
              Logo={StarIcon}
              text="Favourites" />
            <MenuButton className={styles.navigationItem}
              Logo={SettingsIcon}
              text="Settings" />
          </div>
        </Navigation>
      </div>

      <div className={styles.contentContainer}>
        <Header>
          <div className={styles.headerContent}>
            <Search />
            <Button className={styles.headerButton}>
              <NotificationIcon className={styles.headerIcon} />
            </Button>
          </div>
        </Header>
        <main className={styles.mainContainer}>
          {children}
        </main>
      </div>

    </div>
  );
}

export default Main;