import React from 'react';
import * as styles from './Home.module.scss';
import Main from '../../Layout/Main/Main';
import Card from '../../Components/Card/Card';
import { ANALYSIS } from '../../Router/routes';
import Link from '../../Components/Link/Link';

function Home() {
  return (
    <Main>
      <Card className={styles.stockCard}>
        <Link to={`${ANALYSIS}/fb`}>
          Facebook
        </Link>
        <Link to={`${ANALYSIS}/amzn`}>
          Amazon
        </Link>
        <Link to={`${ANALYSIS}/aapl`}>
          Apple
        </Link>
        <Link to={`${ANALYSIS}/ntfx`}>
          Netflix
        </Link>
        <Link to={`${ANALYSIS}/goog`}>
          Google
        </Link>
      </Card>
    </Main>
  )
};

export default Home;
