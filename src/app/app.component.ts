import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  session: any;

  saveData() {
    let todo = { id: 1, name: 'To do de exemplo para mostrar que local storage funciona!' };

    localStorage.setItem('todo', JSON.stringify(todo));
  }

  loadData() {
    let todo: any = localStorage.getItem('todo');
    this.session = JSON.parse(todo);
  }
}
