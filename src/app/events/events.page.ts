import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/notification.service';


@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage {

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
  }
  


}