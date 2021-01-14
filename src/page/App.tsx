import React from 'react';

import TimePassage from '../components/TimePassage';

import { Container, Timeline } from './styles';

const App: React.FC = () => {
  return (
    <Container>
      <Timeline>
          <ul>
            <TimePassage>
              teste
            </TimePassage>
            <TimePassage>
              teste
            </TimePassage>
          </ul>
      </Timeline>
    </Container>
  );
}

export default App;
