import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../todo.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  @Input() todos: Todo[] = []
  @Output() todoRemoved = new EventEmitter<Todo>();
  @Output() todoCompleted = new EventEmitter<Todo>();

  todoRemoveClicked(todo: Todo) {
    this.todoRemoved.emit(todo);
  }

  todoCompletedClicked(todo: Todo) {
    this.todoCompleted.emit(todo);
  }
}
