import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';
import { Text } from '@chakra-ui/react';
import { ICovidData } from '../sections/Main';

interface ProvinceMarkersProps {
  name: string;
  population: number;
  covidData: ICovidData
}

export const ProvinceMarkers: React.FC<ProvinceMarkersProps> = ({
  name,
  population,
  covidData,
}) => {
  return (
    <StyledProviceDisplay>
      <StyledTitle>Province Data</StyledTitle>
      <StyledKey>Name: </StyledKey>
      <StyledValue>{name}</StyledValue>
      <br />
      <StyledKey>Population: </StyledKey>
      <StyledValue>{population}</StyledValue>
      <br />
      <StyledKey>Active Cases: </StyledKey>
      <StyledValue>{covidData.activeCases}</StyledValue>
      <br />
      <StyledKey>Daily Cases: </StyledKey>
      <StyledValue>{covidData.dailyCases}</StyledValue>
      <br />
      <StyledKey>Daily Tested: </StyledKey>
      <StyledValue>{covidData.dailyTested}</StyledValue>
      <br />
      <StyledKey>Daily Deaths: </StyledKey>
      <StyledValue>{covidData.dailyDeaths}</StyledValue>
      <br />
      <StyledKey>Culminative Cases: </StyledKey>
      <StyledValue>{covidData.culminativeCases}</StyledValue>
      <br />
      <StyledKey>Culminative Tested: </StyledKey>
      <StyledValue>{covidData.culminativeTested}</StyledValue>
      <br />
      <StyledKey>Culminative Deaths: </StyledKey>
      <StyledValue>{covidData.culminativeDeaths}</StyledValue>
      <br />
      <StyledKey>Culminative Recovered: </StyledKey>
      <StyledValue>{covidData.culminativeRecovered}</StyledValue>

      
    </StyledProviceDisplay>
  );
};

const StyledProviceDisplay = styled.div`
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-bottom: 15px;
`;

const StyledTitle = styled.h1`
  font-size: ${theme.fontSizes['3xl']};
  font-weight: bold;
  margin-bottom: 14px;
`;

const StyledKey = styled(Text)`
  font-size: ${theme.fontSizes.md};
  font-weight: bold;
  display: inline;
`;

const StyledValue = styled(Text)`
  font-size: ${theme.fontSizes.md};
  font-weight: normal;
  display: inline;
  text-transform: capitalize;
`;
