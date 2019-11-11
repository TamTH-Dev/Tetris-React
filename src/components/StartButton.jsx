import React from 'react';
import PropTypes from 'prop-types';

import { StyledStartButton } from './styles/StyledStartButton';

const StartButton = ({ callback }) => (
  <StyledStartButton onClick={callback}>Start game</StyledStartButton>
);

StartButton.propTypes = { callback: PropTypes.func.isRequired };

export default StartButton;
