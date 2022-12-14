import { Content } from './content';

describe('Notification Content', () => {
  it('should be able to create a notification content', () => {
    expect(() => new Content("You've got a friend request")).toBeTruthy();
  });

  it('should not be able to create a notification content with less than 5 characters', () => {
    expect(() => new Content('3')).toThrow();
  });

  it('should not be able to create a notification content with more than 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
