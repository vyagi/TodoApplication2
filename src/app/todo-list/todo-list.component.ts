import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  @Input() todos: string[] = []
  @Output() todoRemoved = new EventEmitter<number>();

  todoRemoveClicked(index: number) {
    this.todoRemoved.emit(index);
  }
}
