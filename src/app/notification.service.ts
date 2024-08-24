import { Injectable } from '@angular/core';
import { LocalNotifications } from '@capacitor/local-notifications';



@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }
  async scheduleMatchReminder(match: any) {
    await LocalNotifications.requestPermissions();
    await LocalNotifications.schedule({
      notifications: [
        {
          title: 'Upcoming Match Reminder',
          body: `Your match ${match.name} is scheduled for ${match.dateTime.toLocaleString()} at ${match.venue}.`,
          id: match.id,
          schedule: { at: new Date(match.dateTime.getTime() - 15 * 60 * 1000) }, // 15 minutes before
          sound: 'default'
        },
        {
          title: 'Vote for Man of the Match!',
          body: `The match ${match.name} has ended. Click here to vote for the Man of the Match.`,
          id: match.id,
          schedule: { at: new Date(match.dateTime.getTime() + 15 * 60 * 1000) }, // Notify 15 minutes after the match ends
          sound: 'default',
          attachments: [],
          actionTypeId: '',
          extra: null
        }
      ]
    });
  }}

