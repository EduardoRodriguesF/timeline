import styled from 'styled-components';

export const Container = styled.main`
  margin: 0;
`;

export const Timeline = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 !important;
  padding: 0;

  ul { 
    margin: 0;
  }

  @media screen and (max-width: 760px) {
    display: block;
  }
`;