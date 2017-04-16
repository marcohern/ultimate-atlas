import { EqualValidator } from './equal.validator';

describe('EqualValidator', () => {
  it('should create an instance', () => {
    const directive = new EqualValidator("");
    expect(directive).toBeTruthy();
  });
});
