import {scene} from './scene.js'

let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 800,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 200}
        }
    },
    scene: [ scene ]
};

let game = new Phaser.Game(config);
