const player = {
    x: 200,
    y: 100,
    width: 30,
    height: 30,
    color: 'white'
};

function draw(ctx) {
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

export default { draw, player };