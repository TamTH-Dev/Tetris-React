import React from 'react';
import PropTypes from 'prop-types';

import { StyledCell } from './styles/StyledCell';
import { TETROMINOS } from '../tetrominos';

const Cell = ({ type }) => (
  <StyledCell type={type} color={TETROMINOS[type].color} />
);

Cell.propTypes = { type: PropTypes.instanceOf(Array).isRequired };

export default React.memo(Cell);
