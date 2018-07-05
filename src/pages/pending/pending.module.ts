import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PendingPage } from './pending';
import { HomePage } from '../home/home';

@NgModule({
  providers: [HomePage],
  declarations: [
    PendingPage,
  ],
  imports: [
    IonicPageModule.forChild(PendingPage),
  ],
})
export class PendingPageModule {}
