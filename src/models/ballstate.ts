
import { LotteryBall } from './lotteryball';

// 
// Abstract class will be the base of component state objects
//
export abstract class BallState {

    public name: string = '';
    protected context!: LotteryBall;

    public setContext(context: LotteryBall) {
        this.context = context;
    }

    public abstract clicked(): void;

}
