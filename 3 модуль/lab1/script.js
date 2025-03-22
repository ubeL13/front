const boardSize = 10;
const gameBoard = document.getElementById('game-board');
const cells = [];

let snake = [{ x: 0, y: 0 }];
let food = { x: 5, y: 5 };
let direction = 'right';
let speed = 800;

const controls = document.querySelector('.controls');
controls.innerHTML = `
  <button class="up">⬆</button>
  <div>
    <button class="left">⬅</button>
    <button class="right">➡</button>
  </div>
  <button class="down">⬇</button>
  <div class="score">Score: <span>0</span></div>
  <div class="speed-control">
    <label>Speed (ms):</label>
    <input type="number" value="800" min="100" max="2000">
  </div>
`;

document.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'ArrowUp':
      if (direction !== 'down') direction = 'up';
      break;
    case 'ArrowDown':
      if (direction !== 'up') direction = 'down';
      break;
    case 'ArrowLeft':
      if (direction !== 'right') direction = 'left';
      break;
    case 'ArrowRight':
      if (direction !== 'left') direction = 'right';
      break;
    case 'r':
    case 'R':
      resetGame();
      break;
  }
});

document.querySelectorAll('.controls button').forEach(button => {
  button.addEventListener('click', (e) => {
    const newDirection = e.target.className;
    if (
      (newDirection === 'up' && direction !== 'down') ||
      (newDirection === 'down' && direction !== 'up') ||
      (newDirection === 'left' && direction !== 'right') ||
      (newDirection === 'right' && direction !== 'left')
    ) {
      direction = newDirection;
    }
  });
});

document.querySelector('.speed-control input').addEventListener('input', (e) => {
  speed = parseInt(e.target.value) || 800;
});

function initializeGameBoard() {
  gameBoard.style.gridTemplateColumns = `repeat(${boardSize}, 30px)`;
  for (let row = 0; row < boardSize; row++) {
    for (let col = 0; col < boardSize; col++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cells.push(cell);
      gameBoard.appendChild(cell);
    }
  }
}

function render() {
  cells.forEach((cell) => cell.classList.remove('snake', 'food'));

  snake.forEach((segment) => {
    const index = segment.x + segment.y * boardSize;
    cells[index].classList.add('snake');
  });

  const foodIndex = food.x + food.y * boardSize;
  cells[foodIndex].classList.add('food');
}

function update() {
  const head = { ...snake[0] };

  switch (direction) {
    case 'up': head.y--; break;
    case 'down': head.y++; break;
    case 'left': head.x--; break;
    case 'right': head.x++; break;
  }

  if (head.x < 0 || head.x >= boardSize || head.y < 0 || head.y >= boardSize || isCollisionWithSelf(head)) {
    resetGame();
    return;
  }

  snake.unshift(head);
  if (head.x === food.x && head.y === food.y) {
    generateFood();
  } else {
    snake.pop();
  }
}

function isCollisionWithSelf(head) {
  return snake.slice(1).some(segment => segment.x === head.x && segment.y === head.y);
}

function generateFood() {
  do {
    food = {
      x: Math.floor(Math.random() * boardSize),
      y: Math.floor(Math.random() * boardSize)
    };
  } while (snake.some(segment => segment.x === food.x && segment.y === food.y));
}

function resetGame() {
  snake = [{ x: 0, y: 0 }];
  direction = 'right';
  generateFood();
  updateScore(0);
}

function updateScore(score) {
  document.querySelector('.score span').textContent = score;
}

initializeGameBoard();
generateFood();

function gameLoop() {
  update();
  render();
  updateScore(snake.length - 1);
  setTimeout(gameLoop, speed);
}

gameLoop();