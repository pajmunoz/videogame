import player from './entities/player.js';
import { initInput } from './input.js';

const gameCanvas = document.getElementById('game-canvas');
const ctx = gameCanvas.getContext('2d');

let lastTime = 0;

function resizeCanvas() {
    gameCanvas.width = gameCanvas.clientWidth;
    gameCanvas.height = gameCanvas.clientHeight;
    player.setBounds(gameCanvas.width, gameCanvas.height);
}

initInput();
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function gameLoop(timestamp) {
    const dt = Math.min((timestamp - lastTime) / 1000, 0.033);
    lastTime = timestamp;

    if (dt > 0) {
        player.update(dt);
    }

    ctx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
    player.draw(ctx);

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
