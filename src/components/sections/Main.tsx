import React, { useState } from 'react';
import styled from 'styled-components';
import { ButtonEvent, ProvinceName } from '../../utils/types';
import { Projection } from '../atoms/Projection';
import { InfoContainer } from '../containers/InfoContainer';
import { SliderPanel } from '../containers/SliderPanel';

interface MainProps {}

export const Main: React.FC<MainProps> = ({}) => {
  const [province, setProvince] = useState<ProvinceName>('Ontario');

  const handleClick = (event: ButtonEvent, geo: any) => {
    setProvince(geo.properties.gn_name);
  };

  return (
    <>
      <StyledContainer>
        <Projection onHover={handleClick} province={province} />
        <InfoContainer province={province} />
      </StyledContainer>

      <SliderPanel></SliderPanel>
    </>
  );
};

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 1746px) {
    flex-direction: column;
  }
`;