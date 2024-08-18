import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerificationemailPageRoutingModule } from './verificationemail-routing.module';

import { VerificationemailPage } from './verificationemail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerificationemailPageRoutingModule
  ],
  declarations: [VerificationemailPage]
})
export class VerificationemailPageModule {}
