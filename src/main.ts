/// <reference path="../lib/typings/phaser.d.ts"/>

/**
 * Phaser TS Starter
 * Enumox Studio
 */

class GameStart {
    private game: Phaser.Game;
    private logo: Phaser.Sprite;

    constructor(private width: number, private height: number) {
        this.game = new Phaser.Game(width, height, Phaser.AUTO, 'game', {
            preload: this.preload,
            create: this.create,
            update: this.update
        });
    }

    preload(): void {
        this.game.load.image('phaserLogo', 'assets/sprites/phaser-logo.png');
    }

    create(): void {
        this.logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'phaserLogo');
        this.logo.anchor.setTo(0.5, 0.5);
    }

    update (): void {
        //Star coding
    }
}

window.onload = () => {
    const game = new GameStart(1280,720);
}