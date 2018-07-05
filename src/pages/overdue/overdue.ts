import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TodoitemlistProvider } from '../../providers/todoitemlist/todoitemlist'

/**
 * Generated class for the OverduePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-overdue',
  templateUrl: 'overdue.html',
})
export class OverduePage {
  public cItems = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public tdprov: TodoitemlistProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OverduePage');
    this.tdprov.items.forEach(item => {
      if (item.status == "overdue") {
        this.cItems.push(item);
      }
    });
    console.log("this.cItems");
    console.log(this.cItems);
    console.log("items");
    console.log(this.tdprov.items);
  }

}
