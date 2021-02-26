const {getSymbol, setCell} = require('./utils');
const win = require('./get-result');
const table = [['x','x', '-'],['o', '-','o'],['-','x', '-']];

//NEW BEGIN


function move(arr, player, point) {
  return setCell(arr, getSymbol(player), point)
}
// NEW END
const cage = {line: 1, column: 1}

console.log(table);
const test = move(table, 2, cage);
console.log("истинность проставления в ячейку:", test);
let result = win(table);
console.log(result);
console.log(table);