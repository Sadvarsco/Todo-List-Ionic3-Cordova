import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AddTodoPage } from '../add-todo/add-todo';
import { TodoInfoPage } from '../todo-info/todo-info';
import { Storage } from '@ionic/storage';
import { TodoitemlistProvider } from '../../providers/todoitemlist/todoitemlist'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {

  // public hitems;
  // public hcount;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public storage: Storage, public tdprov: TodoitemlistProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OverduePage');
    this.storage.ready().then(() => {
      //var temp = 0;
      this.storage.length().then((temp) => {
        console.log('temp');
        console.log(temp);
        console.log(this.storage.get('counter'));
        console.log(this.storage.get('todolist'));
        console.log(this.tdprov.count);
        console.log(this.tdprov.items);
        if (temp == 0) {
          this.tdprov.items = [];
          this.tdprov.count = 0;
          console.log(this.storage.get('counter'));
          console.log(this.storage.get('todolist'));
          console.log(this.tdprov.count);
          console.log(this.tdprov.items);
        } else {
          this.storage.get('counter').then((val) => {this.tdprov.count = val;
            console.log(this.storage.get('counter'));
            console.log(this.tdprov.count);});
          this.storage.get('todolist').then((val2) =>{this.tdprov.items = val2;
            console.log(this.storage.get('todolist'));
            console.log(this.tdprov.items);});
          
        }
      });
    });
  }

  addTodo() {
    let addModal = this.modalCtrl.create(AddTodoPage);

    addModal.onDidDismiss((item) => {

      if (item) {
        this.saveItem(item);
      }

    });

    addModal.present();
  }

  saveItem(item) {
    this.tdprov.count = this.tdprov.count + 1;
    item.id = this.tdprov.count;
    this.tdprov.items.push(item);
    this.storage.set('counter', this.tdprov.count);
    this.storage.set('todolist', this.tdprov.items);
  }

  TodoInfo(item) {
    this.navCtrl.push(TodoInfoPage, {
      item: item
    });
  }

  delete(item) {
    var index = this.tdprov.items.indexOf(item, 0);
    if (index > -1) {
      this.tdprov.items.splice(index, 1);
    }
    this.storage.set('counter', this.tdprov.count);
    this.storage.set('todolist', this.tdprov.items);
  }
  statusUpdate(item) {
    var index = this.tdprov.items.indexOf(item, 0);
    if (index > -1) {
      if (this.tdprov.items[index].status === 'pending') {
        this.tdprov.items[index].status = 'complete';
      }
      else if (this.tdprov.items[index].status === 'complete') {
        this.tdprov.items[index].status = 'overdue';
      }
      else if (this.tdprov.items[index].status === 'overdue') {
        this.tdprov.items[index].status = 'pending';
      }
    }
    this.storage.set('counter', this.tdprov.count);
    this.storage.set('todolist', this.tdprov.items);
  }
}
