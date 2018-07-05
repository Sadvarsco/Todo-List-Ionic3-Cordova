import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TodoitemlistProvider } from '../../providers/todoitemlist/todoitemlist'

/**
 * Generated class for the PendingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pending',
  templateUrl: 'pending.html',
})
export class PendingPage {
  public cItems = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public tdprov: TodoitemlistProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PendingPage');
    this.tdprov.items.forEach(item => {
      if(item.status == "pending"){
        this.cItems.push(item);
      }
    });
    console.log("this.cItems");
    console.log(this.cItems);
    console.log("items");
    console.log(this.tdprov.items);
  }

}
