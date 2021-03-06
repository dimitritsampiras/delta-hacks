import { Link } from '@chakra-ui/react';
import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';

interface MenuItemProps {
  type: 'github' | 'API';
}

export const MenuItem: React.FC<MenuItemProps> = ({ type }) => {
  let url = urlSwticher(type);

  return (
    <StyledLinkContainer>
      <StyledMenuItem href={url} target="_blank">
        {type}
      </StyledMenuItem>
    </StyledLinkContainer>
  );
};

const StyledLinkContainer = styled.div``;

const StyledMenuItem = styled(Link)`
  color: ${theme.colors.teal[100]};
  text-transform: capitalize;
`;

/**
 *
 */
const urlSwticher = (type: 'github' | 'API') => {
  switch (type) {
    case 'github':
      return 'https://github.com/dimitritsampiras/delta-hacks';
    case 'API':
      return 'https://opencovid.ca/api/';
    default:
      return 'https://github.com/dimitritsampiras/delta-hacks';
  }
};
