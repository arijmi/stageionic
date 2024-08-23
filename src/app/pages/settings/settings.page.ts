import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage{
  reminderTime: number = 3600000; // Default to 1 hour

  constructor() { }

  savePreferences() {
    localStorage.setItem('reminderTime', this.reminderTime.toString());
  }

  loadPreferences() {
    const savedTime = localStorage.getItem('reminderTime');
    this.reminderTime = savedTime ? parseInt(savedTime) : 3600000;
  }

  ionViewDidEnter() {
    this.loadPreferences();
  }
}
