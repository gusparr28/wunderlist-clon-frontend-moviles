import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.page.html',
  styleUrls: ['./view-task.page.scss'],
})
export class ViewTaskPage implements OnInit {

  public task: any;

  constructor(private _route: ActivatedRoute, public tasksService: TasksService ) { }

  ngOnInit(): void {
    // obtengo el parametro id de la url declarado en el app-routing-module
    const id = this._route.snapshot.paramMap.get('id');
    this.task = this.tasksService.getTasksByUser();
  }

}
