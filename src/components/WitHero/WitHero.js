import React from 'react';
import styled from 'styled-components';
import HeroImage from '../../images/1.png';

const WitWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;

const WitContainer = styled.div`
  display: flex;
  width: 70%;
  height: 90vh;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
  height: 90vh;
  justify-content: center;

  .heading {
    font-size: 35px;
    font-weight: 700;
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
  height: 90vh;
  justify-content: center;
  align-items: center;
`;

const VideoButton = styled.button`
  display: flex;
  width: 150px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: #343a40;
  border-radius: 20px;
  color: white;
  margin-top: 20px;s
`;

const WitHero = () => {
  return (
    <>
      <WitWrapper>
        <WitContainer>
          <Left>
            <p className="heading">Grow Efficient, Conserve More</p>
            <p>
              Implementation of modern day tech for minimalistic use of
              freshwater in agriculture, detection of crop disease and enhancing
              the productivity.
            </p>
            <VideoButton>Watch Video &rarr;</VideoButton>
          </Left>
          <Right>
            <img src={HeroImage} alt="Hero Image" />
          </Right>
        </WitContainer>
      </WitWrapper>
    </>
  );
};

export default WitHero;
