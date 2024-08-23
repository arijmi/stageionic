import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { PushNotifications } from '@capacitor/push-notifications';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private platform: Platform) {
    this.initializeApp();
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.setupPushNotifications();
    });
}
setupPushNotifications() {
  // Request permission to use push notifications
  PushNotifications.requestPermissions().then(result => {
    if (result.receive === 'granted') {
      // Register with the push notification service
      PushNotifications.register();
    }
  });
  PushNotifications.addListener('pushNotificationReceived', (notification) => {
    alert('Push notification received: ' + notification.title);
  });

  PushNotifications.addListener('pushNotificationActionPerformed', (notification) => {
    alert('Push notification action performed: ' + notification.notification.data);
  });
}
}
