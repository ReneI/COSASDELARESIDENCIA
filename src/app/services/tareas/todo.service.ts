
import { ToDo } from '../../models/notas';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { URL_RAIZ} from '../../config/config';

import { HttpClient,HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {Response} from '@angular/http';
import { Injectable } from '@angular/core';
@Injectable()
export class TodoService {

  api_url = 'https://saci2o.herokuapp.com';
  todoUrl = `${this.api_url}/api/notas`;

  constructor(
    private http: HttpClient
  ) { }

  headers: HttpHeaders =  new HttpHeaders({
    "Content-Type" : "application/json"

  });

  createTodo(todo: ToDo): Observable<any>{
    console.log(this.todoUrl);
    return this.http.post(this.todoUrl, todo,  {headers: this.headers});
}
  
  //Read todo, takes no arguments
  getToDos(): Observable<ToDo[]>{
  
    return this.http.get(this.todoUrl)
    .map(res  => {
      //Maps the response object sent from the server
        
      return res as ToDo[];
    })
  }
  //Update todo, takes a ToDo Object as parameter
  editTodo(todo:ToDo){
  
    let editUrl = `${this.todoUrl}`
    console.log(editUrl);
    //returns the observable of http put request 
    return this.http.put(editUrl, todo);
  }

  deleteTodo(id:string):any{
    //Delete the object by the id
    let deleteUrl = `${this.todoUrl}/${id}`
    console.log(deleteUrl);
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