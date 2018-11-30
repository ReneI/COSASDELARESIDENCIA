
import { ToDo } from '../../models/notas';
import { Observable } from 'rxjs/Rx';
import { URL_RAIZ} from '../../config/config';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Response} from '@angular/http';
import { Injectable } from '@angular/core';
@Injectable()
export class TodoService {

  api_url = 'https://saci2o.herokuapp.com';
  todoUrl = `${this.api_url}/api/notas`;

  constructor(
    private http: HttpClient
  ) { }

  createTodo(todo: ToDo): Observable<any>{
    //returns the observable of http post request 
    return this.http.post(`${this.todoUrl}`, todo);
}
  
  //Read todo, takes no arguments
  getToDos(): Observable<ToDo[]>{
    return this.http.get(this.todoUrl)
    .map(res  => {
      //Maps the response object sent from the server
        
      return res["data"].docs as ToDo[];
    })
  }
  //Update todo, takes a ToDo Object as parameter
  editTodo(todo:ToDo){
    let editUrl = `${this.todoUrl}`
    //returns the observable of http put request 
    return this.http.put(editUrl, todo);
  }

  deleteTodo(id:string):any{
    //Delete the object by the id
    let deleteUrl = `${this.todoUrl}/${id}`
    return this.http.delete(deleteUrl)
    .map(res  => {
      return res;
    })
  }

  //Default Error handling method.
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
}

}