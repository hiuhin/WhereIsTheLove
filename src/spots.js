export default class Spot {
    constructor(location) {
        this.x = null;
        this.y = null;
    }

    coordinates(location) {
        switch (location) {
            case top:
                return { x: 159, y: 16 };
                break;
            case right:
                return { x: 251, y: 57 };
                break;
            case bottom:
                return { x: 159, y: 99 };
                break;
            case left:
                return { x: 67, y: 57 };
                break
        }
}