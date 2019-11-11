import React from 'react';
import Proptypes from 'prop-types';

import { StyledDisplay } from './styles/StyledDisplay';

const Display = ({ gameOver, text }) => (
  <StyledDisplay gameOver={gameOver}>{text}</StyledDisplay>
);

Display.propTypes = {
  gameOver: Proptypes.bool.isRequired,
  text: Proptypes.string.isRequired,
}

export default Display;
