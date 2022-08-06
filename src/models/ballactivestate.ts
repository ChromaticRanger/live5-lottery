
import { BallState } from './ballstate';
import { PassiveBallState } from './ballpassivestate';

//
// The Active State of a game ball
//
export class ActiveBallState extends BallState {

    constructor() {
        super();
        this.name = 'Active';
    }

    public clicked(): void {
        this.context.transitionTo(new PassiveBallState());
    }

}

