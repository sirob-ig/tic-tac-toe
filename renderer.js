const {getSymbol, setCell} = require('./utils');
const win = require('./get-result');
let res;
 table = [[' ', ' ', ' '],[' ', ' ',' '],[' ',' ', ' ']];

//NEW BEGIN


function move(arr, player, point) {
  return setCell(arr, getSymbol(player), point)
}

const blessed = require('blessed');
const screen = blessed.screen({
});
let player = 1;

screen.key(['escape', 'q', 'C-c'], function(ch, key) {
  console.log(player === 1 ? "x" : "0")
  return process.exit(0);
});

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    const box = blessed.box({
      top: `${100 + i*200}`,
      left: `${300 + j*100}`,
      width: '90',
      height: '200',
      content: '-',
      tags: true,
      border: {
        type: 'line'
      },
      style: {
        fg: 'white',
        bg: 'magenta',
        border: {
          fg: '#f0f0f0'
        },
        hover: {
          bg: 'green'
        }
      }
    });
    box.on('click', function(data) {
      box.setContent(getSymbol(player));
      move(table, player, {line: i, column: j});
      res = win(table);

      if (res) {
        screen.realloc();
        const box = blessed.box({
          top: 'center',
          left: 'center',
          width: '200',
          height: '400',
          content: `Игрок ${player} выйграл`,
          tags: true,
          border: {
            type: 'line'
          },
          style: {
            fg: 'white',
            bg: 'magenta',
            border: {
              fg: '#f0f0f0'
            },
            hover: {
              bg: 'green'
            }
          }
        });
        screen.append(box);
      }

      player = player % 2 + 1;
      
      screen.render();
    });
     
screen.append(box);
  }
}

screen.render();