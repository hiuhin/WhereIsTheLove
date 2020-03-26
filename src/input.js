import {nextRound} from "./index";
import {check} from "./index";


export default class InputHandler {
    constructor(round, roundNum) {
        document.addEventListener("keydown", event => {
            switch (event.keyCode) {
            case 37:
                // round.choice = 3;
                debugger;
                check(round, 3);
                break;
            case 38:
                // round.choice = 0;
                    debugger;
                check(round, 0);
                break;
            case 39:
                // round.choice = 1;
                    debugger;
                check(round, 1);
                break;
            case 40:
                // round.choice = 2;
                    debugger;
                check(round, 2);
                break;
            // case 27:
            //     togglePause();
            //     break;
            }

        });
    }         
}