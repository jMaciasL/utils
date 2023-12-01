import Stack from '../lib/Stack';

describe('Stack', () => {
  const myStack = new Stack();
  const fakeVal = "fakeVal";
  describe('isEmpty', () => {
    test('returns true when there is not any value', () => {
      expect(myStack.isEmpty()).toBeTruthy();
    });
    test('returns false when there is any value', () => {
      myStack.push(fakeVal);
      expect(myStack.isEmpty()).toBeFalsy();
    });
  });
  describe('peek', () => {
    test('return the last value inserted', () => {
      expect(myStack.peek()).toBe(fakeVal);
    });
    test('returns null when empty', () => {
      myStack.pop();
      expect(myStack.peek()).toBe(null);
    });
  });
});
