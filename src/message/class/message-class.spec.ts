import { MessageClass } from './message-class';
import { _utils } from '../../_utils/_utils';

const haveAuthorNameProperty = msg => {
  let authorName: string;
  it('should have <authorName> property', () => {
    expect(msg).toHaveProperty('authorName');
  });
  authorName = msg.authorName;
  describe('message.authorName', () => {
    it('type string', () => expect(authorName).toBeString());
    it('length 3-50', () => {
      expect(authorName.length).toBeGreaterThanOrEqual(3);
      expect(authorName.length).toBeLessThanOrEqual(50);
    });
  });
};
const haveContentProperty = msg => {
  let content: string;
  it('should have <content> property', () => {
    expect(msg).toHaveProperty('content');
    content = msg.content;
  });
  describe('message.content', () => {
    it('type string', () => expect(content).toBeString());
    it('length 2-100k', () => {
      expect(content.length).toBeGreaterThanOrEqual(2);
      expect(content.length).toBeLessThanOrEqual(100000);
    });
  });
};
const scoreProperties = ['likesAmount', 'dislikesAmount'];
const haveScoreProperty = msg => {
  let score: { likesAmount: number, dislikesAmount: number };
  it('should have <score> property', () => {
    expect(msg).toHaveProperty('score');
  });
  score = msg.score;
  describe('tstMsg.score', () => {
    it('type object', () => expect(score).toBeObject());
    it('with properties: ' + scoreProperties.join(),
      () => expect(score).toContainAllKeys(scoreProperties));
    describe('likesAmount', () => {
      it('type number', () => expect(score.likesAmount).toBeNumber());
      it('>= 0', () => expect(score.likesAmount).toBeGreaterThanOrEqual(0));
    });
    describe('dislikesAmount', () => {
      it('type number', () => expect(score.dislikesAmount).toBeNumber());
      it('>= 0', () => expect(score.dislikesAmount).toBeGreaterThanOrEqual(0));
    });
  });
};
const validProperties = [
  'authorName', 'content', 'score',
];
const haveOnlyValidProperties = msg =>
  it('should have only valid properties: ' + validProperties.join(),
    () => expect(msg).toContainAllKeys(validProperties));
describe('MessageClass', () => {

  it('should be defined', () => {
    expect(new MessageClass()).toBeDefined();
  });

  const msg = new MessageClass();
  describe('random example: ' + _utils.obj.to.JSON.formatted({
    ...msg,
    content: msg.content.substr(0, 20).trim() + '...',
  }), () => {
    it("shouldn't be empty", () => expect(msg).not.toBeEmpty());
    haveOnlyValidProperties(msg);
    haveAuthorNameProperty(msg);
    haveContentProperty(msg);
    haveScoreProperty(msg);
  });
});
