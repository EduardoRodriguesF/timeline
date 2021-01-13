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
    width: 5px;
    padding-top: 50px;
    background: #000;
    color: #fff;

    &::after {
      content: '';
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
      width: 12px;
      height: 12px;
      border-radius: 15px;
      background: inherit;
    }

    div { 
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative; 
      width: 400px;
      padding: 15px 32px;
      background: #888;

      &::before {
        content: '';
        position: absolute;
        bottom: 4px;
        width: 24px;
        height: 3px;
        background: #000;
      }
    }
  }

  li:nth-child(even) div {
    left: -488px;
    
    &::before {
      right: -24px;
    }
  }

  li:nth-child(odd) div {
    margin-left: 24px;  
      
    &::before {
      left: -24px;
    }
  }
`;