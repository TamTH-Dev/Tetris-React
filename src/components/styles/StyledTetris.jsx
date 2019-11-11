import styled from 'styled-components';

import bgImage from '../../images/background.jpg';

export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${bgImage}) #000;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
`;

export const StyledTetris = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 40px;
  margin: 0 auto;
  max-width: 900px;
  
  aside {
    width: 100%;
    max-width: 200px;
    display: block;
    padding: 0 20px;
  }
`;
