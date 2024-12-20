import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoList = [
    "Learn Angular",
    "Have fun using it"
  ]
  
  getTodos() {
    return this.todoList;
  }

  addTodo(todo: string) {
    this.todoList.push(todo);
  }
 
  removeTodo(index: number) {
    this.todoList.splice(index, 1);
  }
}
