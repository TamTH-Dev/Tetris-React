import React from 'react';
import PropTypes from 'prop-types';

import { StyledControlButton } from './styles/StyledControlButton';

const ControlButton = ({ startGame, stopGame, resumeGame, droptime }) => {
  if (droptime === null) {
    return <StyledControlButton onClick={startGame}>Start Game</StyledControlButton>;
  }
  if (droptime === 999999999) {
    return <StyledControlButton onClick={resumeGame}>Resume Game</StyledControlButton>;
  }
  return <StyledControlButton onClick={stopGame}>Stop Game</StyledControlButton>;
};

ControlButton.propTypes = {
  startGame: PropTypes.func.isRequired,
  stopGame: PropTypes.func.isRequired,
  resumeGame: PropTypes.func.isRequired,
  droptime: PropTypes.number.isRequired,
};

export default ControlButton;
