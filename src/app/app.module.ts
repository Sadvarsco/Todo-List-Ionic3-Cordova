import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddTodoPage } from '../pages/add-todo/add-todo';
import { TodoInfoPage } from '../pages/todo-info/todo-info';
import { OverduePage } from '../pages/overdue/overdue';
import { PendingPage } from '../pages/pending/pending';
import { CompletePage } from '../pages/complete/complete';
import { TodoitemlistProvider } from '../providers/todoitemlist/todoitemlist'



@NgModule({
  declarations: [
    MyApp,
    HomePage, 
    AddTodoPage,
    TodoInfoPage,
    OverduePage,
    PendingPage,
    CompletePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, 
    AddTodoPage,
    TodoInfoPage,
    OverduePage,
    PendingPage,
    CompletePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    IonicStorageModule,
    TodoitemlistProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
