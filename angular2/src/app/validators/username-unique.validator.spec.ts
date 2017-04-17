import { UsernameUniqueValidator } from './username-unique.validator';

describe('UsernameUniqueValidator', () => {
  it('should create an instance', () => {
    const directive = new UsernameUniqueValidator();
    expect(directive).toBeTruthy();
  });
});
