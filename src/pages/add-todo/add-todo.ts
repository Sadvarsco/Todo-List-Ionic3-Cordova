import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';


@Component({
  selector: 'page-add-item',
  templateUrl: 'add-todo.html'
})
export class AddTodoPage {
  id: number;
  title: string;
  notes: string;
  status: string;

  constructor(public navCtrl: NavController, public view: ViewController) {

  }

  saveTodo() {
    if (this.title == undefined) {
      this.view.dismiss();
      console.log("if this.title");
      console.log(this.title);
    }
    else {
      console.log("else this.title");
      console.log(this.title);
      let newTodo = {
        id: 999,
        title: this.title,
        notes: this.notes,
        status: 'pending'
      };

      this.view.dismiss(newTodo);
    }
  }

  close() {
    this.view.dismiss();
  }

}