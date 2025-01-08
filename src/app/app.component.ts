import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { Todo, TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, TodoListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  todoList: Todo[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.refreshTodo();
  }

  newTodo = "";
  addNewTodo() {
    if(this.newTodo) {
      this.todoService.addTodo(this.newTodo).subscribe(response => {
        this.refreshTodo();
      });
      this.newTodo = "";
    }
  }

  updateTodo(todo: Todo) {
    this.todoService.updateTodo(todo).subscribe(response => {
      this.refreshTodo();
    });
  }

  removeTodo(todo: Todo) {
    this.todoService.removeTodo(todo).subscribe(response => {
      this.refreshTodo();
    });
  }

  refreshTodo() {
    this.todoService.getTodos().subscribe(response => {
      this.todoList = response;
    });
  }
}
