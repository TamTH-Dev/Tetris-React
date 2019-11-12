import { useState, useEffect } from 'react';

import { createStage } from '../gameHelpers';

// eslint-disable-next-line import/prefer-default-export
export const useStage = (player, resetPlayer) => {
  const [stage, setStage] = useState(createStage());
  const [rowsCleared, setRowCleared] = useState(0);

  useEffect(() => {
    setRowCleared(0);
    const sweepRow = (newStage) => newStage.reduce((ack, row) => {
      if (row.findIndex((cell) => cell[0] === 0) === -1) {
        setRowCleared((prevValue) => prevValue + 1);
        ack.unshift(new Array(newStage[0].length).fill([0, 'clear']));
        return ack;
      }
      ack.push(row);
      return ack;
    }, []);
    const updateStage = (prevStage) => {
      // First flush the stage
      const newStage = prevStage.map((row) => row.map((cell) => ((cell[1] === 'clear') ? [0, 'clear'] : cell)));

      // Then draw the tetromino
      player.tetromino.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            newStage[y + player.pos.y][x + player.pos.x] = [
              value,
              `${player.collided ? 'merged' : 'clear'}`,
            ];
          }
        });
      });

      // Check if collided
      if (player.collided) {
        resetPlayer();
        return sweepRow(newStage);
      }
      return newStage;
    };

    setStage((prevState) => updateStage(prevState));
  }, [player, resetPlayer]);

  return [stage, setStage, rowsCleared];
};
