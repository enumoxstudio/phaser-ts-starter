/// <reference path="../lib/typings/phaser.d.ts"/>
/**
 * Phaser TS Starter
 * Enumox Studio
 */
var GameStart = /** @class */ (function () {
    function GameStart(width, height) {
        this.width = width;
        this.height = height;
        this.game = new Phaser.Game(width, height, Phaser.AUTO, 'game', {
            preload: this.preload,
            create: this.create,
            update: this.update
        });
    }
    GameStart.prototype.preload = function () {
        this.game.load.image('phaserLogo', 'assets/sprites/phaser-logo.png');
    };
    GameStart.prototype.create = function () {
        this.logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'phaserLogo');
        this.logo.anchor.setTo(0.5, 0.5);
    };
    GameStart.prototype.update = function () {
        //Star coding
    };
    return GameStart;
}());
window.onload = function () {
    var game = new GameStart(1280, 720);
};
