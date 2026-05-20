import player from './entities/player.js';
import { endInputFrame, initInput, wasPressed } from './input.js';

const gameCanvas = document.getElementById('game-canvas');
const ctx = gameCanvas.getContext('2d');
const pauseScreen = document.getElementById('pause-screen');

let lastTime = 0;
let paused = false;

function resizeCanvas() {
    gameCanvas.width = gameCanvas.clientWidth;
    gameCanvas.height = gameCanvas.clientHeight;
    player.setBounds(gameCanvas.width, gameCanvas.height);
}

function togglePause() {
    paused = !paused;
    pauseScreen.hidden = !paused;
}

initInput();
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function gameLoop(timestamp) {
    const dt = Math.min((timestamp - lastTime) / 1000, 0.033);
    lastTime = timestamp;

    if (wasPressed('p') || wasPressed('P')) {
        togglePause();
    }

    if (!paused && dt > 0) {
        player.update(dt);
    }

    ctx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
    player.draw(ctx);

    endInputFrame();
    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
