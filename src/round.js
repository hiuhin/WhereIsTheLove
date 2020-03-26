import Spot from "./spots";
import Shape from "./shapes";

export default class Round {
    constructor(ctx) {
        this.ctx = ctx
        this.gameHeight = 1000;
        this.gameWidth = 1000;
        this.spots = ["top", "bottom", "left", "right"];
        this.heartSpot = new Spot(this.spots[Math.floor(Math.random() * this.spots.length)]);
        this.otherSpots = 
            this.spots.filter(spot => spot !== this.heartSpot.location)
            .map(spot => new Spot(spot));
    }

    start() {
        let heart = new Shape;
        console.log(heart);
        heart.drawHeart(this.ctx, this.heartSpot.coordinates.x, this.heartSpot.coordinates.y);
        
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

    clearSpots() {
        this.ctx.clearRect(0, 0, this.gameWidth, this.gameHeight);
    }
}

// import InputHandler from "./input";

// export default class Round {
//     constructor(
//         ctx,
//         heartSpots,
//         shapeSize,
//         topSpot,
//         rightSpot,
//         bottomSpot,
//         leftSpot,
//         roundNum,
//         speed
//     ) {
//         this.gameHeight = 1000;
//         this.gameWidth = 1000;
//         this.ctx = ctx;
//         this.heartSpots = heartSpots;
//         this.shapeSize = shapeSize;
//         this.spots = [topSpot, rightSpot, bottomSpot, leftSpot];
//         this.colors = [
//             "red",
//             "lawngreen",
//             "crimson",
//             "gold",
//             "orangered"
//         ];
//         this.roundNum = roundNum;
//         this.shuffle = this.shuffle.bind(this);
//         this.choice = null;
//         this.speed = speed;
//     }
        
//         // flashHeart() {
//         //     this.drawHeart(
//         //         this.ctx,
//         //         this.spots[this.heartSpots[this.roundNum-1]].x,
//         //         this.spots[this.heartSpots[this.roundNum-1]].y,
//         //         this.shapeSize.w,
//         //         this.shapeSize.h,
//         //         this.colors[Math.floor(Math.random() * this.colors.length)]
//         //     );
//         // }

//         // flashShapes() {
//         //     let noHeartSpots = this.spots.filter((spot, idx) => idx !== this.heartSpots[this.roundNum-1]);
//         //     let shuffledSpots = this.shuffle(noHeartSpots);

//         //     this.drawSpade(
//         //         this.ctx,
//         //         shuffledSpots[0].x,
//         //         shuffledSpots[0].y,
//         //         this.shapeSize.w,
//         //         this.shapeSize.h,
//         //         this.colors[Math.floor(Math.random() * this.colors.length)],
//         //         );

//         //     this.drawDiamond(
//         //         this.ctx,
//         //         shuffledSpots[1].x,
//         //         shuffledSpots[1].y,
//         //         this.shapeSize.w,
//         //         this.shapeSize.h,
//         //         this.colors[
//         //         Math.floor(Math.random() * this.colors.length)
//         //         ]
//         //     ); 

//         //     this.drawClub(
//         //         this.ctx,
//         //         shuffledSpots[2].x,
//         //         shuffledSpots[2].y,
//         //         this.shapeSize.w,
//         //         this.shapeSize.h,
//         //         this.colors[
//         //         Math.floor(Math.random() * this.colors.length)
//         //         ]
//         //     ); 
//         // }

//         // shuffle(spots) {
//         //     let newPos;
//         //     let temp;
//         //     for (let i = spots.length - 1; i > 0; i--) {
//         //         newPos = Math.floor(Math.random() * (i + 1));
//         //         temp = spots[i];
//         //         spots[i] = spots[newPos];
//         //         spots[newPos] = temp;
//         //     }
//         //     return spots;
//         //  }

//         //  clearSpots() {
//         //     this.ctx.clearRect(0, 0, this.gameWidth, this.gameHeight);
//         //  }

// }