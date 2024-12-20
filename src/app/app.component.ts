import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, TodoListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  todoList: string[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoList = this.todoService.getTodos();
  }

  newTodo = "";
  addNewTodo() {
    if(this.newTodo) {
      this.todoService.addTodo(this.newTodo);
      this.newTodo = "";
    }
  }

  removeTodo(index: number) {
    this.todoService.removeTodo(index);
  }
}
