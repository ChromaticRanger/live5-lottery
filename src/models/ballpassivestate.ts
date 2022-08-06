
import { BallState } from './ballstate';
import { ActiveBallState } from './ballactivestate';

//
// The Passive State of a game ball
//
export class PassiveBallState extends BallState {

    constructor() {
        super();
        this.name = 'Passive';
    }

    public clicked(): void {
        this.context.transitionTo(new ActiveBallState());
    }

}
