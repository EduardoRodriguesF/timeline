import React from 'react';

import { Container, Timeline } from './styles';

function App() {
  return (
    <Container>
      <Timeline>
        <ul>
          <li>
            <div>Teste 1</div>
          </li>
          <li>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fermentum egestas diam, at dapibus lectus lacinia at. Etiam hendrerit posuere augue nec pretium. Nam finibus lacus eget ex vulputate sagittis. Proin a libero eget turpis eleifend tincidunt id et quam. Nunc interdum scelerisque ipsum sit amet aliquam. Phasellus fermentum nisi quis quam laoreet, eu ullamcorper sem venenatis. Nam aliquet lectus sed nulla tincidunt, id ornare neque blandit. Nulla facilisi. Curabitur varius volutpat leo, egestas volutpat mi auctor varius. Morbi suscipit ante sed enim eleifend accumsan. Donec eu orci et mi finibus faucibus at vel est.</div>
          </li>
          <li>
            <div>Teste 3</div>
          </li>
          <li>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fermentum egestas</div>
          </li>
        </ul>
      </Timeline>
    </Container>
  );
}

export default App;
