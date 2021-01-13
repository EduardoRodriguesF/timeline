import React from 'react';
import { Fade } from "react-awesome-reveal";

import { Container, Timeline } from './styles';

const App: React.FC = () => {
  return (
    <Container>
      <Timeline>
          <ul>
            <li>
              <Fade triggerOnce direction="down">Teste 1</Fade>
            </li>
            <li>
              <Fade triggerOnce direction="down">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fermentum egestas diam, at dapibus lectus lacinia at. Etiam hendrerit posuere augue nec pretium. Nam finibus lacus eget ex vulputate sagittis. Proin a libero eget turpis eleifend tincidunt id et quam. Nunc interdum scelerisque ipsum sit amet aliquam. Phasellus fermentum nisi quis quam laoreet, eu ullamcorper sem venenatis. Nam aliquet lectus sed nulla tincidunt, id ornare neque blandit. Nulla facilisi. Curabitur varius volutpat leo, egestas volutpat mi auctor varius. Morbi suscipit ante sed enim eleifend accumsan. Donec eu orci et mi finibus faucibus at vel est.</Fade>
            </li>
            <li>
              <Fade triggerOnce direction="down">Teste 3</Fade>
            </li>
            <li>
              <Fade triggerOnce direction="down">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fermentum egestas</Fade>
            </li>
            <li>
              <Fade triggerOnce direction="down">In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.</Fade>
            </li>
            <li>
              <Fade triggerOnce direction="down">In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.</Fade>
            </li>
            <li>
              <Fade triggerOnce direction="down">In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.</Fade>
            </li>
            <li>
              <Fade triggerOnce direction="down">In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.</Fade>
            </li>
            <li>
              <Fade triggerOnce direction="down">In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.</Fade>
            </li>
            <li>
              <Fade triggerOnce direction="down">In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.</Fade>
            </li>
          </ul>
      </Timeline>
    </Container>
  );
}

export default App;
