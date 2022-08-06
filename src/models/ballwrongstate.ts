
import { CorrectBallState } from './ballcorrectstate';
import { BallState } from './ballstate';

//
// The Wrong State of a game ball
//
export class WrongBallState extends BallState {

    constructor() {
        super();
        this.name = 'Wrong';
    }

    public clicked(): void {
      this.context.transitionTo(new CorrectBallState());
    }

}
