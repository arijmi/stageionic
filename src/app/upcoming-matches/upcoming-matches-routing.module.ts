import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpcomingMatchesPage } from './upcoming-matches.page';

const routes: Routes = [
  {
    path: '',
    component: UpcomingMatchesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpcomingMatchesPageRoutingModule {}
