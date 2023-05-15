import * as Phaser from 'phaser';
import TextStyle = Phaser.Types.GameObjects.Text.TextStyle;



const formatScore = (score) => `Score: ${score}`;

export default class ScoreLabel extends Phaser.GameObjects.Text {
	constructor(scene: Phaser.Scene, x:number, y:number, private score:number, style: TextStyle) {
		super(scene, x, y, formatScore(score), style);
	}

	setScore(score: number) {
		this.score = score;
		this.updateScoreText();
	}

	add(points: number) {
		this.setScore(this.score + points);
	}

	updateScoreText() {
		this.setText(formatScore(this.score));
	}
}