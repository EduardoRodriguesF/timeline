import React from 'react';
import { Fade } from "react-awesome-reveal";


import { Container } from './styles';

const TimePassage: React.FC = ({ children }) => {
  return (
    <Container>
      <Fade triggerOnce direction="down">
        {children}
      </Fade>
    </Container>
  )
}

export default TimePassage;