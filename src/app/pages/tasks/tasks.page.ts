import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { menuData } from 'src/app/interfaces/menuData';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: 'tasks.page.html',
  styleUrls: ['tasks.page.scss']
})
export class TasksPage {

  public menuData: menuData[] = [];
  public tasks: any = [];

  constructor(private _tasksService: TasksService, private _router: Router) { }

  ngOnInit() {
    this._tasksService.getTasksByUser().subscribe((res: any) => {
      this.tasks = res.tasks;
    })
  }

  public viewTask(task) {
    this._router.navigate([`home/tasks/${task._id}`])
  }

}
