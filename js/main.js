import player from './entities/player.js';
const gameCanvas = document.getElementById('game-canvas');
const ctx = gameCanvas.getContext('2d');

function draw() {
    ctx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
    player.draw(ctx);
    requestAnimationFrame(draw);
}

function gameLoop() {
    draw();
    requestAnimationFrame(gameLoop);
}

gameLoop();