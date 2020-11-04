import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {

  @Input() task: String;

  constructor(private _router: Router) { }

  ngOnInit() { }

  public viewTask(task) {
    this._router.navigate([`home/tasks/${task._id}`])
  }

}
