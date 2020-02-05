export default class InputHandler {
    constructor(round) {
        document.addEventListener("keydown", event => {
            switch (event.keyCode) {
            case 37:
                round.choice = 3;
                break;
            case 38:
                round.choice = 0;
                break;
            case 39:
                round.choice = 1;
                break;
            case 40:
                round.choice = 2;
                break;
            // case 27:
            //     togglePause();
            //     break;
            }
        
            if (round.choice === round.heartSpots[round.roundNum]) {
                console.log("correct!");
                console.log(round.roundNum);
                round.clearSpots();
                round.roundNum++;
            } 
            
            if (round.choice !== round.heartSpots[round.roundNum] && round.choice !== null) {
                console.log("incorrect!");
                round.clearSpots;
                round.roundNum++;
            }
        });
    }         
}