import { isPressed, wasPressed } from '../input.js';

const player = {
    x: 200,
    y: 100,
    width: 30,
    height: 30,
    color: 'white',
    speed: 300,
    lives: 3
};

let bounds = { width: 300, height: 150 };

function setBounds(width, height) {
    bounds = { width, height };
}

function fire() {
    console.log('fire');
}

function update(dt) {
    if (wasPressed(' ')) {
        fire();
    }

    if (isPressed('ArrowLeft')) {
        player.x -= player.speed * dt;
    }
    if (isPressed('ArrowRight')) {
        player.x += player.speed * dt;
    }
    if (isPressed('ArrowUp')) {
        player.y -= player.speed * dt;
    }
    if (isPressed('ArrowDown')) {
        player.y += player.speed * dt;
    }

    player.x = Math.max(0, Math.min(player.x, bounds.width - player.width));
    player.y = Math.max(0, Math.min(player.y, bounds.height - player.height));
}

function draw(ctx) {
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

export default { draw, player, setBounds, update };
