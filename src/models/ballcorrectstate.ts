
import { BallState } from './ballstate';
import { WrongBallState } from './ballwrongstate';

//
// The Correct State of a game ball
//
export class CorrectBallState extends BallState {

    constructor() {
        super();
        this.name = 'Correct'
    }

    public clicked(): void {
      this.context.transitionTo(new WrongBallState())
    }

}
