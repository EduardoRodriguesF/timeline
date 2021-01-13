import styled from 'styled-components';

export const Container = styled.main`
  
`;

export const Timeline = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  li { 
    list-style-type: none;
    position: relative;
    width: 4px;
    padding-top: 50px;
    background: #000;
    color: #fff;

    &::after {
      content: '';
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
      width: 10px;
      height: 10px;
      border-radius: 15px;
      background: inherit;
    }

    div { 
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative; 
      width: 400px;
      margin: 0 4px;
      padding: 15px 32px;
      background: #888;
    }
  }

  li:nth-child(even) div {
    left: -464px;
    margin: 0;
  }
`;