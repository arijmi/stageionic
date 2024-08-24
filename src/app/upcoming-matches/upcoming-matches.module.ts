import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpcomingMatchesPageRoutingModule } from './upcoming-matches-routing.module';

import { UpcomingMatchesPage } from './upcoming-matches.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpcomingMatchesPageRoutingModule
  ],
  declarations: [UpcomingMatchesPage]
})
export class UpcomingMatchesPageModule {}
