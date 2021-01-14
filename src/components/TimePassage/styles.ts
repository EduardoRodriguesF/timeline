import styled from 'styled-components';

export const Container = styled.li`
  list-style-type: none;
  position: relative;
  width: 5px;
  padding-top: 64px;
  background: #000;
  color: #fff;

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -1px;
    transform: translateX(-50%);
    width: 12px;
    height: 12px;
    border-radius: 15px;
    background: inherit;
  }

  > div { 
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative; 
    width: 400px;
    padding: 15px 32px;
    background: #0d5599;
    font-family: Arial, Helvetica, sans-serif;
    color: #fff;

    h2 {
      line-height: 0.2;
    }

    p {
      margin-top: 18px;
      text-align: justify;
    }

    &::before {
      content: '';
      position: absolute;
      bottom: 3px;
      width: 24px;
      height: 3px;
      background: #000;
    }
  }

  &:nth-child(even) > div {
    left: -488px;
    
    &::before {
      right: -24px;
    }
  }

  &:nth-child(odd) > div {
    margin-left: 24px;  
      
    &::before {
      left: -24px;
    }
  }
`;