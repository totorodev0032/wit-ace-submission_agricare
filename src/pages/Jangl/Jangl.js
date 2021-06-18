import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SensorImage from '../../images/sensorpage.png';
import * as WiIcons from 'react-icons/wi';
import * as FaIcons from 'react-icons/fa';
import * as TiIcons from 'react-icons/ti';
import { TiWeatherPartlySunny } from 'react-icons/ti';
import { GiChemicalDrop } from 'react-icons/gi';
import { FiDroplet } from 'react-icons/fi';
import firebase from '../../firebase';

const SensorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f2f5f8;
  ${'' /* background-image: url(${SensorImage}); */}
  background-size: cover;
  background-position: center;
  height: 50vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .title {
    font-size: 30px;
    color: black;
    font-weight: 600;
    text-align: center;
  }
`;

const SensorBoxWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-radius: 10px;
  padding: 40px;
  background-color: white;
  border: 1px solid #cecce3;
  align-items: center;
  justify-content: space-around;
  width: 70%;
`;

const SensorContentBox = styled.div`
  display: flex;
  padding: 10px;
  height: auto;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  p {
    color: black;
    margin-top: 2px;
    text-align: center;
  }
`;

const DataWrapper = styled.div`
  display: flex;
  ${'' /* flex-direction: column; */}
  background-color: #f2f5f8;
  ${'' /* background-image: url(${SensorImage}); */}
  background-size: cover;
  background-position: center;
  height: 50vh;
  width: 100%;
  justify-content: center;
  ${'' /* align-items: center; */}
  ${'' /* flex-direction: column; */}

  .title {
    font-size: 30px;
    color: white;
    font-weight: 600;
    text-align: center;
  }
`;

const RecommendationBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 40px;
  background-color: white;
  border: 1px solid #cecce3;

  width: 42%;
  height: 60%;

  .heading {
    font-size: 22px;
    font-weight: 600;
  }
`;

const WeatherBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 40px;
  background-color: white;
  border: 1px solid #cecce3;
  align-items: center;
  justify-content: space-around;
  width: 25%;
  height: 60%;
  margin-left: 3%;
`;

const Jangl = () => {
  const rndInt = Math.floor(Math.random() * 30) + 1;
  const [data, setData] = useState({});

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      const dbRef = firebase.database().ref();
      dbRef.on('value', (snapshot) => {
        const data = snapshot.val();
        setData(data);
      });
    }

    return function cleanup() {
      mounted = false;
    };
  }, []);

  return (
    <>
      <SensorWrapper>
        <p className="title">Place 1</p>
        <SensorBoxWrapper>
          <SensorContentBox>
            <WiIcons.WiHumidity style={{ color: 'blue', fontSize: '40px' }} />
            <p>{data.env_humi}</p>
            <p>Humidity</p>
          </SensorContentBox>

          <SensorContentBox>
            <FaIcons.FaTemperatureHigh
              style={{ color: 'blue', fontSize: '40px' }}
            />
            <p>{data.env_temp}</p>
            <p>Environment Temp</p>
          </SensorContentBox>

          <SensorContentBox>
            <TiIcons.TiWeatherWindyCloudy
              style={{ color: 'blue', fontSize: '40px' }}
            />
            <p>{data.soil_temp}</p>
            <p>Soil Temp</p>
          </SensorContentBox>

          <SensorContentBox>
            <GiChemicalDrop style={{ color: 'blue', fontSize: '40px' }} />
            <p>{data.soil_ph}</p>
            <p>Soil pH</p>
          </SensorContentBox>

          <SensorContentBox>
            <FiDroplet style={{ color: 'blue', fontSize: '40px' }} />
            <p>{data.soil_mois}</p>
            <p>Soil moisture</p>
          </SensorContentBox>
        </SensorBoxWrapper>
      </SensorWrapper>
      <DataWrapper>
        <RecommendationBoxWrapper>
          <p className="heading">Recommendation:</p>
          <li>Need water in 15 hours.</li>
          <li>No pesticides is needed.</li>
          <li>Soil is healthy.s</li>
        </RecommendationBoxWrapper>
        <WeatherBoxWrapper>
          <TiWeatherPartlySunny style={{ color: 'blue', fontSize: '40px' }} />
          <p>{rndInt} °C</p>
        </WeatherBoxWrapper>
      </DataWrapper>
    </>
  );
};

export default Jangl;
