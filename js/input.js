const keysDown = new Set();

export function initInput() {
    document.addEventListener('keydown', (event) => {
        keysDown.add(event.key);
    });
    document.addEventListener('keyup', (event) => {
        keysDown.delete(event.key);
    });
    document.addEventListener('keydown', (event) => {
        keysDown.add(event.key);
    });
    document.addEventListener('keyup', (event) => {
        keysDown.delete(event.key);
    });
}

export function isPressed(key) {
    return keysDown.has(key);
}
