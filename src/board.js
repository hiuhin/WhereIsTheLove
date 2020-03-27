import Shape from "./shapes";

export default class Board {
    constructor(ctx, heartSpot, otherSpots) {
        this.ctx = ctx;
        this.heartSpot = heartSpot;
        this.otherSpots = otherSpots;
        this.gameHeight = 1000;
        this.gameWidth = 1000;
        console.log(this.ctx)
    }

    generate() {
        console.log(this.ctx);
        let heart = new Shape("heart");
        let shuffledSpots = this.shuffle(this.otherSpots);
        let otherShapes = ["spade", "diamond", "club"];
        let otherShapesObj = otherShapes.map(shape => new Shape(shape)) 

        heart.draw(this.ctx, this.heartSpot.coordinates.x, this.heartSpot.coordinates.y);

        for (let i = 0; i < shuffledSpots.length; i++) {
            let shape = otherShapesObj[i];
            console.log(shuffledSpots);
            shape.draw(this.ctx, shuffledSpots[i].coordinates.x, shuffledSpots[i].coordinates.y);
        } 
    }

    clear() {
        console.log(this.ctx);
        this.ctx.clearRect(0, 0, this.gameWidth, this.gameHeight);
    }

    shuffle(spots) {
        let newPos;
        let temp;
        for (let i = spots.length - 1; i > 0; i--) {
            newPos = Math.floor(Math.random() * (i + 1));
            temp = spots[i];
            spots[i] = spots[newPos];
            spots[newPos] = temp;
        }
        return spots;
    }
    
}