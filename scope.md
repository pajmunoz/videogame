MVP (mínimo viable)

jugador se mueve
jugador dispara
enemigos caen
balas destruyen enemigos
enemigos dañan al jugador
score
vidas
game over
reinicio

Versión 2

enemigos con patrones
power-ups
fondo scrolling
explosiones
sonido

Versión 3

boss
niveles
high scores
pausa
menú inicial

space-shooter/
│
├── index.html
├── styles.css
├── js/
│   ├── main.js
│   ├── config.js
│   ├── game.js
│   ├── input.js
│   ├── utils.js
│   ├── entities/
│   │   ├── player.js
│   │   ├── enemy.js
│   │   ├── bullet.js
│   │   ├── powerup.js
│   │   └── boss.js
│   └── systems/
│       ├── collision.js
│       ├── spawner.js
│       ├── audio.js
│       └── hud.js
│
└── assets/
    ├── images/
    ├── audio/
    └── sprites/