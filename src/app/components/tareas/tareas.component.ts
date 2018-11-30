import { TodoService } from '../../services/tareas/todo.service';
import { Response } from '@angular/http';
import {  ToDo } from '../../models/Notas';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarea',
  templateUrl: './tareas.component.html'
})
export class TareaComponent implements OnInit {

  constructor(
    // Private todoservice will be injected into the component by Angular Dependency Injector
    private todoService: TodoService
  ) { }

  // Declaring the new todo Object and initilizing it
  public newTodo: ToDo = new ToDo();

  // An Empty list for the visible todo list
  todosList: ToDo[];
  editTodos: ToDo[] = [];

  ngOnInit(): void {

    // At component initialization the 
    this.todoService.getToDos()
      .subscribe(todos => {
        // assign the todolist property to the proper http response
        this.todosList = todos;
        console.log(todos );
      });
  }

  create() {
    this.todoService.createTodo(this.newTodo)
      .subscribe((res) => {
        this.todosList.push(res.data)
        this.newTodo = new ToDo()
      })
}


editTodo(todo: ToDo) {
  console.log(todo)
  if(this.todosList.includes(todo)){
    if(!this.editTodos.includes(todo)){
      this.editTodos.push(todo)
    }else{
      this.editTodos.splice(this.editTodos.indexOf(todo), 1)
      this.todoService.editTodo(todo).subscribe(res => {
        console.log('Update Succesful')
      }, err => {
        this.editTodo(todo)
        console.error('Update Unsuccesful')
      })
    }
  }
}
}