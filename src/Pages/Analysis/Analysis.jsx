import React, { useState } from 'react';
import * as styles from './Analysis.module.scss';
import Main from '../../Layout/Main/Main';
import Card from '../../Components/Card/Card';
import Slider from '../../Components/Slider/Slider';
import { HOME } from '../../Router/routes';
import { Link } from '@reach/router';
import PredictionChart from '../../Components/PredictionChart/PredictionChart';

const actual =
{
  name: 'Actual',
  data: [
    { category: '2020-01-01', value: 212 },
    { category: '2020-01-02', value: 214 },
    { category: '2020-01-03', value: 211.46 },
    { category: '2020-01-04', value: 215 },
    { category: '2020-01-05', value: 215 },
    { category: '2020-01-06', value: 212.7 },
    { category: '2020-01-07', value: 213.5 },
  ],
};

const prediction = {
  name: 'Prediction',
  data: [
    { category: '2020-01-04', value: 215 },
    { category: '2020-01-05', value: 214 },
    { category: '2020-01-06', value: 213.04 },
    { category: '2020-01-07', value: 211 },
    { category: '2020-01-08', value: 214.89 },
    { category: '2020-01-09', value: 214 },
  ],
};

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
            <Slider min={-5} max={0} onChange={handleChange} />
          </Card>
        </div>
      </div>
    </Main>
  )
};

export default Analysis;