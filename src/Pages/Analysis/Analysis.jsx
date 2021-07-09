import React, { useEffect, useState } from 'react';
import * as styles from './Analysis.module.scss';
import Main from '../../Layout/Main/Main';
import Card from '../../Components/Card/Card';
import Slider from '../../Components/Slider/Slider';
import { actual } from '../../MockData';
import { HOME } from '../../Router/routes';
import Link from '../../Components/Link/Link';
import PredictionChart from '../../Components/PredictionChart/PredictionChart';
import dayjs from 'dayjs';
import GaugeChart from 'react-advanced-gauge-chart';


function Analysis({ id }) {
  const [offset, setOffset] = useState(0);
  const [predictionData, setPredictionData] = useState([]);
  const predictions = {
    name: 'Prediction',
    data: predictionData
  }
  console.log(predictionData);

  const generatePredictionData = (chartOffset) => {
    const initialPoint = actual.data[actual.data.length - 1 - (chartOffset * -1)];
    const newPredictionData = [];
    newPredictionData.push(initialPoint);
    const lastActualDate = dayjs(actual.data[actual.data.length - 1].category);
    let dayCounter = 0;
    for (let i = 0; i < 90; i++) {
      console.log(i);
      const lastPrediction = newPredictionData[newPredictionData.length - 1];
      const nextPredictionDate = dayjs(lastPrediction.category).add(1 + dayCounter, 'day');
      console.log("isBefore", (nextPredictionDate.isBefore(lastActualDate)));
      console.log("next", nextPredictionDate.format('YYYY-MM-DD'));
      console.log("last", lastActualDate.format('YYYY-MM-DD'));
      if (nextPredictionDate.isBefore(lastActualDate)) {
        const isWorkingDay = actual.data.some((actualDataPoint) => {
          if (actualDataPoint.category === nextPredictionDate.format('YYYY-MM-DD')) {
            return true;
          } else {
            return false;
          }
        })
        console.log(isWorkingDay);
        if (!isWorkingDay) {
          dayCounter++;
          continue;
        } else {
          dayCounter = 0;
        }
      }
      const nextPrediction = {
        category: nextPredictionDate.format('YYYY-MM-DD'),
        value: Number((lastPrediction.value - (Math.random() * 2 - 1)).toFixed(2)),
      }
      newPredictionData.push(nextPrediction);
    }
    return newPredictionData;
  }

  useEffect(() => {
    const generatedPredictionData = generatePredictionData(offset);
    setPredictionData(generatedPredictionData)
  }, [])

  const handleChange = (newValue) => {
    setOffset(newValue);
  }

  const handleAfterChange = (newValue) => {
    const generatedPredictionData = generatePredictionData(newValue);
    setPredictionData(generatedPredictionData);
  }


  return (
    <Main>
      <Link to={HOME}>
        Back
      </Link>
      <h2 className={styles.mainTitle}>AAPL</h2>
      <span className={styles.mainText}>Apple Inc</span>
      <div className={styles.row}>
        <Card className={styles.predictionCard}>
          <PredictionChart actual={actual} prediction={predictions} referenceDotX={actual.data[actual.data.length - 1 - (offset * -1)].category} referenceDotY={actual.data[actual.data.length - 1 - (offset * -1)].value} />
        </Card>
        <div className={styles.controlCardContainer}>
          <Card className={styles.controlCard}>
            <div className={styles.historicContainer}>
              <span className={styles.title}>CONTROLS</span>
              <span className={styles.text}>Historical timeshift</span>
              <div className={styles.sliderContainer}>
                <Slider min={(actual.data.length * -1) + 1} max={0} onChange={handleChange} onAfterChange={handleAfterChange} />
              </div>
            </div>
          </Card>
        </div>
      </div>
      <div className={styles.row}>
        <Card className={styles.accuracyCard}>
          <span className={styles.title}>PREDICTION ACCURACY</span>
          <GaugeChart id="gauge-chart1" className={styles.gaugeChart}
            textColor="#000000"
            needleColor="#b8b8b8"
            nrOfLevels={25}
            colors={["#43425D", "#3182bd"]}
          />
        </Card>
      </div>
    </Main>
  )
};

export default Analysis;