import InputHandler from "./input";

export default class Game {
    constructor(gameHeight, gameWidth, ctx, heartSpots, shapeSize, topSpot, rightSpot, bottomSpot, leftSpot, drawHeart) {
        this.gameHeight = gameHeight;
        this.gameWidth = gameWidth;
        this.round = 0;
        this.ctx = ctx;
        this.heartSpots = heartSpots;
        this.shapeSize = shapeSize;
        this.spots = [topSpot, rightSpot, bottomSpot, leftSpot];
        this.colors = [
            "red",
            "lawngreen",
            "gold",
            "fuchsia",
            "tomato"
        ];
        this.drawHeart = drawHeart;
    }

    draw() {
        this.drawHeart(
            this.ctx,
            this.spots[this.heartSpots[this.round]].x,
            this.spots[this.heartSpots[this.round]].y,
            this.shapeSize.w,
            this.shapeSize.h,
            this.colors[Math.floor(Math.random() * this.colors.length)]
        )
    }
}