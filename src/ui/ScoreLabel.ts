import * as Phaser from 'phaser';


const formatScore = (score) => `Score: ${score}`

export default class ScoreLabel extends Phaser.GameObjects.Text
{
	constructor(scene, x, y, private score, style)
	{
		super(scene, x, y, formatScore(score), style)
	}

	setScore(score)
	{
		this.score  = score
		this.updateScoreText()
	}

	add(points)
	{
		this.setScore(this.score + points)
	}

	updateScoreText()
	{
		this.setText(formatScore(this.score))
	}
}