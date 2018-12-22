import { TodoService } from '../../services/tareas/todo.service';
import { Response } from '@angular/http';
import {  ToDo } from '../../models/Notas';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

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

    this.todoService.getToDos()
      .subscribe(todos => {
        // asignar para obtener mi listas
        this.todosList = todos;
        console.log(todos );
      });
  }
  submitTodo(event, todo:ToDo){
    if(event.keyCode ==13){
      this.editTodo(todo)
    }
}
  create(){
    this.todoService.createTodo(this.newTodo)
      .subscribe((res) => {
        this.todosList.push(res);
        console.log(res);
        this.newTodo = new ToDo();
      })
}
deleteTodo(todo: ToDo) {
  this.todoService.deleteTodo(todo.id).subscribe(res => {
    this.todosList.splice(this.todosList.indexOf(todo), 1);
  })
}

doneTodo(todo:ToDo){
  todo.estado = 'completo'
  this.todoService.editTodo(todo).subscribe(res => {
    console.log('Update Succesful')
  }, err => {
    this.editTodo(todo)
    console.error('Update Unsuccesful')
  })
}


incompleto(todo:ToDo){
  todo.estado = 'incompleto'
  this.todoService.editTodo(todo).subscribe(res => {
    console.log('Update Succesful')
  }, err => {
    this.editTodo(todo)
    console.error('Update Unsuccesful')
  })
}

editTodo(todo: ToDo) {
  console.log(todo)
  if(this.todosList.includes(todo)) {
    if(!this.editTodos.includes(todo)) {
      this.editTodos.push(todo);
    }else{
      this.editTodos.splice(this.editTodos.indexOf(todo), 1);
      console.log(todo);
      this.todoService.editTodo(todo).subscribe(res => {
        console.log('Update Succesful');
      }, err => {
        this.editTodo(todo)
        console.error('error');
      })
    }
  }
}
}