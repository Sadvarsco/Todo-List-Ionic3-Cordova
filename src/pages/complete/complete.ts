import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TodoitemlistProvider } from '../../providers/todoitemlist/todoitemlist'

/**
 * Generated class for the CompletePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-complete',
  templateUrl: 'complete.html',
})
export class CompletePage {
  public cItems = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public tdprov: TodoitemlistProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompletePage');
    this.tdprov.items.forEach(item => {
      if(item.status == "complete"){
        this.cItems.push(item);
      }
    });
    console.log("this.cItems");
    console.log(this.cItems);
    console.log("items");
    console.log(this.tdprov.items);
  }

}
