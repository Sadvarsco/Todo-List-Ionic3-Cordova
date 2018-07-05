import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TodoInfoPage } from './todo-info';

@NgModule({
  declarations: [
    TodoInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(TodoInfoPage),
  ],
})
export class TodoInfoPageModule {}
