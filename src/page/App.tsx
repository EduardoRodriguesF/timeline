import React, { useState, useEffect } from 'react';

import TimePassage from '../components/TimePassage';

import data from './passages.json';

import { Container, Timeline } from './styles';

interface IPassage {
  title: string;
  date: string;
  text: string;
}

const App: React.FC = () => {
  const [passages, setPassages] = useState<IPassage[]>();

  useEffect(() => {
    setPassages(data);
  }, []);

  return (
    <Container>
      <Timeline>
          <ul>
            {passages && passages.map(passage => <TimePassage>{passage.text}</TimePassage>)}
          </ul>
      </Timeline>
    </Container>
  );
}

export default App;
