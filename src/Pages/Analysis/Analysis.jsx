import React, { useState } from 'react';
import * as styles from './Analysis.module.scss';
import Main from '../../Layout/Main/Main';
import Card from '../../Components/Card/Card';
import Slider from '../../Components/Slider/Slider';
import { actual, prediction } from '../../MockData';
import { HOME } from '../../Router/routes';
import { Link } from '@reach/router';
import PredictionChart from '../../Components/PredictionChart/PredictionChart';


function Analysis({ id }) {
  const [offset, setOffset] = useState(0);

  const handleChange = (newValue) => {
    setOffset(newValue)
  }


  return (
    <Main>
      <Link to={HOME}>
        Back
      </Link>
      <div className={styles.row}>
        <Card className={styles.predictionCard}>
          <PredictionChart actual={actual} prediction={prediction} referenceDotX={actual.data[actual.data.length - 1 - (offset * -1)].category} referenceDotY={actual.data[actual.data.length - 1 - (offset * -1)].value} />
        </Card>
        <div className={styles.controlCardContainer}>
          <Card className={styles.controlCard}>
            <Slider min={(actual.data.length * -1) + 1} max={0} onChange={handleChange} />
          </Card>
        </div>
      </div>
    </Main>
  )
};

export default Analysis;