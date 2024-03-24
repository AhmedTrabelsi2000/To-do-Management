import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  taskArray = [{ taskName: 'Brush teeth', isCompleted: false }];
  showIncompleteTasks: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.taskArray.push({
      taskName: form.controls['task'].value,
      isCompleted: false
    });
    form.reset();
  }

  onDelete(index: number) {
    this.taskArray.splice(index, 1);
  }

  onCheck(index: number) {
    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;
  }

  // Filter tasks based on completion status
  get filteredTasks() {
    if (this.showIncompleteTasks) {
      return this.taskArray.filter(task => !task.isCompleted); // Filter incomplete tasks
    } else {
      return this.taskArray; // Return all tasks if filter is not active
    }
  }

  // Toggle between showing all tasks and showing only incomplete tasks
  toggleIncompleteTasks() {
    this.showIncompleteTasks = !this.showIncompleteTasks;
  }
}
