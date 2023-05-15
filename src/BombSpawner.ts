import * as Phaser from 'phaser';

export default class BombSpawner
{
	private readonly _group: Phaser.Physics.Arcade.Group

	constructor(private scene, private key = 'bomb')
	{
		this._group = this.scene.physics.add.group()
	}

	get group()
	{
		return this._group
	}

	spawn(playerX = 0)
	{
		const x = (playerX < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400)

		const bomb = this.group.create(x, 16, this.key)
		bomb.setBounce(1)
		bomb.setCollideWorldBounds(true)
		bomb.setVelocity(Phaser.Math.Between(-200, 200), 20)

		return bomb
	}
}