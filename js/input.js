const keysDown = new Set();
const keysJustPressed = new Set();

export function initInput() {
    document.addEventListener('keydown', (event) => {
        if (!keysDown.has(event.key)) {
            keysJustPressed.add(event.key);
        }
        keysDown.add(event.key);
    });

    document.addEventListener('keyup', (event) => {
        keysDown.delete(event.key);
    });
}

export function isPressed(key) {
    return keysDown.has(key);
}

export function wasPressed(key) {
    return keysJustPressed.has(key);
}

export function endInputFrame() {
    keysJustPressed.clear();
}
