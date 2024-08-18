import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerificationemailPage } from './verificationemail.page';

const routes: Routes = [
  {
    path: '',
    component: VerificationemailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerificationemailPageRoutingModule {}
