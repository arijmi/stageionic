import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventsPageRoutingModule } from './events-routing.module';

import { EventsPage } from './events.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventsPageRoutingModule
  ],
  declarations: [EventsPage]
})
export class EventsPageModule {}
export interface Event {
  id: number;
  name: string;
  startTime: Date; // The event's start time
  location?: string; // Optional: event location
  timeChanged?: boolean; // Optional: track last-minute changes
}
