export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () => {
  const subArr = [];
  for (let i = 0; i < STAGE_WIDTH; i++) {
    subArr.push([0, 'clear']);
  }

  const arr = [];
  for (let i = 0; i < STAGE_HEIGHT; i++) {
    arr.push(subArr);
  }
  return arr;
};

export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
  const tetrominoHeight = player.tetromino.length;

  for (let y = 0; y < tetrominoHeight; y++) {
    const width = player.tetromino[y].length;
    for (let x = 0; x < width; x++) {
      // 1. Check that we're on the actual tetromino cell
      if (player.tetromino[y][x] !== 0) {
        if (
          /* 2. Check that our move is inside the game areas height (y).
          We shouldn't go through the bottom of play area */
          !stage[y + player.pos.y + moveY]
          // 3. Check that our move is inside the game areas width (x)
          || !stage[y + player.pos.y + moveY][x + player.pos.x + moveX]
          // 4. Check that the cell we're moving to isn't set to clear
          || stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !== 'clear'
        ) {
          return true;
        }
      }
    }
  }
};
