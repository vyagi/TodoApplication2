import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  url = "https://todoapi20241217142623.azurewebsites.net/api/Todo";
  options = { headers: { "AlbumNumber": "123" } };

  constructor(private httpClient: HttpClient) { }

  getTodos() {
     return this.httpClient.get<Todo[]>(this.url, this.options);
  }

  addTodo(todo: string) {
    let newTodo = {
      name: todo,
      completed: false,
      dueDate: new Date()
    };

    return this.httpClient.post(this.url, newTodo, this.options);
  }
 
  updateTodo(todo: Todo) {
    return this.httpClient.put(this.url + "/" + todo.id, todo, this.options);
  }

  removeTodo(todo: Todo) {
    return this.httpClient.delete(this.url + "/" + todo.id, this.options);
  }
}

export interface Todo {
  "id": number,
  "name": string,
  "completed": boolean,
  "dueDate": Date
}