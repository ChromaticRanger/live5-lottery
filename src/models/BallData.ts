
//
// The shape of data needed for a Ball object to be created
//

import { LotteryBall } from "./lotteryball";

// Each ball has a value a defaul color and a state
export type BallData = {
  value: string;
  hexcolor: string;
  state: string;
}

// The structure of the game data
export type BallDataStructure = Array<Array<BallData>>

// Type will hold infomation about any prize won
export type PrizePot = {
  prize: number;
  matches: Array<LotteryBall>;
}

