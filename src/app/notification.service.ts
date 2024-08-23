import { Injectable } from '@angular/core';
import { LocalNotifications } from '@capacitor/local-notifications';
import { Event } from '../app/events/events.module';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }
  getReminderTime(): number {
    const savedTime = localStorage.getItem('reminderTime');
    return savedTime ? parseInt(savedTime) : 3600000; // Default to 1 hour
  }
  scheduleReminder(event: Event) {
    const reminderTime = new Date(event.startTime).getTime() - 3600000; // 1 hour before

    LocalNotifications.schedule({
      notifications: [
        {
          title: "Event Reminder",
          body: `Reminder for ${event.name}`,
          id: event.id,
          schedule: { at: new Date(reminderTime) },
          sound: "default", // use "default" for sound
        }
      ]
    });
  }
  sendLastMinuteChangeNotification(event: Event) {
    LocalNotifications.schedule({
      notifications: [
        {
          title: "Event Update",
          body: `The event ${event.name} has been updated.`,
          id: event.id + 1,
          schedule: { at: new Date() },
          sound: "default",
        }
      ]
    });
  }

}

