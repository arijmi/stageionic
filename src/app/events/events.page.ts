import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/notification.service';
import { Event } from 'src/app/events/events.module';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage {

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
  }
  onEventCreated(event:Event) {
    this.notificationService.scheduleReminder(event);
  }
  onEventUpdated(event: Event) {
    if (event.timeChanged) {
      this.notificationService.sendLastMinuteChangeNotification(event);
    }
  }

}



