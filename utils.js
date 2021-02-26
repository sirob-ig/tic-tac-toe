const {
  SYMBOL_PLAYER_1,
  SYMBOL_PLAYER_2,
  SYMBOL_EMPTY
} = require('./constants');

function getSymbol(player) {
  switch(player) {
    case 1:
      return SYMBOL_PLAYER_1;
    case 2:
      return SYMBOL_PLAYER_2;
    default:
      throw new Error(`нет игрока с номером ${player}`);
  }
}

function setCell(arr, symb, point) {
  if (arr[point.line][point.column] !== SYMBOL_EMPTY) {
    return false;
  }
  
  arr[point.line][point.column] = symb;
  
  return true;
}

module.exports = {
  getSymbol,
  setCell
};