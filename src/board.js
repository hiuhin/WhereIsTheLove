import Shape from "./shapes";

export default class Board {
    constructor(ctx, heartSpot, otherSpots) {
        this.ctx = ctx;
        this.heartSpot = heartSpot;
        this.otherSpots = otherSpots;
    }

    generate() {
        let heart = new Shape("heart");
        let shuffledSpots = this.shuffle(this.otherSpots);
        let otherShapes = ["spade", "diamond", "club"];
        let otherShapesObj = otherShapes.map(shape => new Shape(shape)) 

        heart.draw(this.ctx, this.heartSpot.coordinates.x, this.heartSpot.coordinates.y);

        for (let i = 0; i < shuffledSpots.length; i++) {
            let shape = otherShapesObj[i];
            shape.draw(this.ctx, shuffledSpots[i].coordinates.x, shuffledSpots[i].coordinates.y);
        } 
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