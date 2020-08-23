import { _utils } from "../../_utils/_utils";
export class MessageClass {
  authorName: string;
  content: string;
  score: {
    likesAmount: number,
    dislikesAmount: number,
  };
  constructor() {
    if (arguments.length === 0) {
      this.generateRandomExample();
    }
  }
  private generateRandomExample() {
    this.authorName = _utils.rnd.name();
    this.content = _utils.rnd.paragraph();
    this.score = {
      likesAmount: _utils.rnd.integer({ min: 0, max: 1000 }),
      dislikesAmount: _utils.rnd.integer({ min: 0, max: 1000 }),
    };
  }
}
