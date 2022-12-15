import { Notification } from '@application/entities/notification';
import { Content } from '@application/entities/content';
import { CountRecipientNotifications } from './count-recipient-notifications';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { NotificationNotFound } from './errors/notification-not-found';

describe('Count recipient notifications', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotifications(
      notificationsRepository
    );

    await notificationsRepository.create(
      new Notification({
        recipientId: 'recipient-1',
        content: new Content('Friend Request'),
        category: 'social',
      })
    );

    await notificationsRepository.create(
      new Notification({
        recipientId: 'recipient-1',
        content: new Content('Friend Request'),
        category: 'social',
      })
    );

    await notificationsRepository.create(
      new Notification({
        recipientId: 'recipient-2',
        content: new Content('Friend Request'),
        category: 'social',
      })
    );

    const { count } = await countRecipientNotifications.execute({
      recipientId: 'recipient-1',
    });

    expect(count).toEqual(2);
  });
});
