import React from 'react';
import styled from 'styled-components';
import NutrientLogo from '../../images/3.png';
import CropLogo from '../../images/4.png';
import WaterLogo from '../../images/5.png';

const HowWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 70vh;
  justify-content: center;
  align-items: center;
`;

const HowContainer = styled.div`
  display: flex;
  width: 80%;
  height: 80%;
  border-radius: 10px;
  background-color: #e3f2fd;
  justify-content: center;
  align-items: center;
`;

const HowContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  height: 15vh;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: 600;
`;

const HowCardSection = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  flex-direction: row;
`;

const HowCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 270px;
  height: 250px;
  background-color: white;
  margin-left: 30px;
  justify-content: center;
  align-items: center;

  img {
    height: 50%;
    margin-bottom: 10px;
  }
`;

const How = () => {
  return (
    <>
      <HowWrapper>
        <HowContainer>
          <HowContent>
            <Header>How Agricare will help you?</Header>
            <HowCardSection>
              <HowCard>
                <img src={NutrientLogo} alt="nutrient" />
                <p>Nutrient Management</p>
              </HowCard>
              <HowCard>
                <img src={CropLogo} alt="nutrient" />
                <p>Crop Protection</p>
              </HowCard>

              <HowCard>
                <img src={WaterLogo} alt="nutrient" />
                <p>Water Usage Optimization</p>
              </HowCard>
            </HowCardSection>
          </HowContent>
        </HowContainer>
      </HowWrapper>
    </>
  );
};

export default How;
