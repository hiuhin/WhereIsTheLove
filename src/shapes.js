import { drawSpade } from "./drawshapes";

export default class Shape {
    constructor(type) {
        this.height = 15;
        this.width = 10;
        this.type = type;
        this.colors = [
            "red",
            "lawngreen",
            "crimson",
            "gold",
            "orangered"
        ];
        this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
    }

    drawSpade(context, x, y) {
        context.save();
        var bottomWidth = this.width * 0.7;
        var topHeight = this.height * 0.7;
        var bottomHeight = this.height * 0.3;

        context.beginPath();
        context.moveTo(x, y);

        // top left of spade          
        context.bezierCurveTo(
            x, y + topHeight / 2, // control point 1
            x - this.width / 2, y + topHeight / 2, // control point 2
            x - this.width / 2, y + topHeight // end point
        );

        // bottom left of spade
        context.bezierCurveTo(
            x - this.width / 2, y + topHeight * 1.3, // control point 1
            x, y + topHeight * 1.3, // control point 2
            x, y + topHeight // end point
        );

        // bottom right of spade
        context.bezierCurveTo(
            x, y + topHeight * 1.3, // control point 1
            x + widtthis.h / 2, y + topHeight * 1.3, // control point 2
            x + widtthis.h / 2, y + topHeight // end point
        );

        // top right of spade
        context.bezierCurveTo(
            x + widtthis.h / 2, y + topHeight / 2, // control point 1
            x, y + topHeight / 2, // control point 2
            x, y // end point
        );

        context.closePath();
        context.fillStyle = this.color;
        context.fill();

        // bottom of spade
        context.beginPath();
        context.moveTo(x, y + topHeight);
        context.quadraticCurveTo(
            x, y + topHeight + bottomHeight, // control point
            x - bottomWidth / 2, y + topHeight + bottomHeight // end point
        );
        context.lineTo(x + bottomWidth / 2, y + topHeight + bottomHeight);
        context.quadraticCurveTo(
            x, y + topHeight + bottomHeight, // control point
            x, y + topHeight // end point
        );
        context.closePath();
        context.fillStyle = this.color;
        context.fill();
        context.restore();
    }

    drawHeart(context, x, y) {
        context.save();
        context.beginPath();
        var topCurveHeight = this.height * 0.3;
        context.moveTo(x, y + topCurveHeight);
        // top left curve
        context.bezierCurveTo(
            x,
            y,
            x - this.width / 2,
            y,
            x - this.width / 2,
            y + topCurveHeight
        );

        // bottom left curve
        context.bezierCurveTo(
            x - this.width / 2,
            y + (this.height + topCurveHeight) / 2,
            x,
            y + (this.height + topCurveHeight) / 2,
            x,
            y + this.height
        );

        // bottom right curve
        context.bezierCurveTo(
            x,
            y + (this.height + topCurveHeight) / 2,
            x + this.width / 2,
            y + (this.height + topCurveHeight) / 2,
            x + this.width / 2,
            y + topCurveHeight
        );

        // top right curve
        context.bezierCurveTo(x + this.width / 2, y, x, y, x, y + topCurveHeight);

        context.closePath();
        context.fillStyle = this.color;
        context.fill();
        context.restore();
    };

    drawClub(context, x, y) {
        context.save();
        var circleRadius = this.width * 0.3;
        var bottomWidth = this.width * 0.5;
        var bottomHeight = this.height * 0.35;
        context.fillStyle = this.color;

        // top circle
        context.beginPath();
        context.arc(
            x,
            y + circleRadius + this.height * 0.05,
            circleRadius,
            0,
            2 * Math.PI,
            false
        );
        context.fill();

        // bottom right circle
        context.beginPath();
        context.arc(
            x + circleRadius,
            y + this.height * 0.6,
            circleRadius,
            0,
            2 * Math.PI,
            false
        );
        context.fillStyle = this.color;
        context.fill();

        // bottom left circle
        context.beginPath();
        context.arc(
            x - circleRadius,
            y + this.height * 0.6,
            circleRadius,
            0,
            2 * Math.PI,
            false
        );
        context.fillStyle = this.color;
        context.fill();

        // center filler circle
        context.beginPath();
        context.arc(x, y + this.height * 0.5, circleRadius / 2, 0, 2 * Math.PI, false);
        context.fill();

        // bottom of club
        context.moveTo(x, y + this.height * 0.6);
        context.quadraticCurveTo(x, y + this.height, x - bottomWidth / 2, y + this.height);
        context.lineTo(x + bottomWidth / 2, y + this.height);
        context.quadraticCurveTo(x, y + this.height, x, y + this.height * 0.6);
        context.closePath();
        context.fill();
        context.restore();
    }

    drawDiamond(context, x, y) {
        context.save();
        context.beginPath();
        context.moveTo(x, y);

        // top left edge
        context.lineTo(x - this.width / 2, y + this.height / 2);

        // bottom left edge
        context.lineTo(x, y + this.height);

        // bottom right edge
        context.lineTo(x + this.width / 2, y + this.height / 2);

        // closing the path automatically creates
        // the top right edge
        context.closePath();

        context.fillStyle = this.color;
        context.fill();
        context.restore();
    }
}
