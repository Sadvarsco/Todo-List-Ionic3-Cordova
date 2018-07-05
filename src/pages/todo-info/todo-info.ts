import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

/**
 * Generated class for the TodoInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-todo-info',
  templateUrl: 'todo-info.html',
})
export class TodoInfoPage {

  id;
  title;
  notes;
  status;

  constructor(public navParams: NavParams) {

  }

  ionViewDidLoad() {
    this.id = this.navParams.get('item').id;
    this.title = this.navParams.get('item').title;
    this.notes = this.navParams.get('item').notes;
    this.status = this.navParams.get('item').status;
  }

}

