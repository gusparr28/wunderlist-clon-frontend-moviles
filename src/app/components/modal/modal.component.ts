import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { TasksService } from 'src/app/services/tasks.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  @Input() task: any;
  public pinnedIcon: string = 'eyedrop-outline';
  public title: string;
  public description: string;
  public priority: string;
  public date: string;
  public time: string;
  public pinned: boolean;

  constructor(private _modalCtrl: ModalController,
    private _tasksService: TasksService,
    private _utilsService: UtilsService
  ) { }

  ngOnInit() {
    if (this.task) {
      this.title = this.task["title"];
      this.description = this.task["description"];
      if (this.task.pinned) {
        this.pinnedIcon = 'eyedrop';
      } else {
        this.pinnedIcon = 'eyedrop-outline';
      }
    }
  }

  public togglePinnedIcon() {
    if (!this.task.pinned) {
      this.pinnedIcon = 'eyedrop';
    } else {
      this.pinnedIcon = 'eyedrop-outline';
    }
    this.task.pinned = !this.task.pinned;
  }

  public goBack() {
    this._modalCtrl.dismiss();
  }

  public createTask(title: any, description: any) {
    if (this.task) {
      let task = {
        ...this.task,
        title: this.title,
        description: this.description
      };
      this.onUpdateTaskEvent(task).then((res: any) => {
        this._tasksService.changeValue({ ...res.task });
        this._utilsService.dismiss();
        setTimeout(() => {
          this._modalCtrl.dismiss();
          this._utilsService.presentToast(res.message, 'success');
        }, 500)
      });
    } else {
      this.onCreateTaskEvent(title, description).then((res: any) => {
        this._tasksService.changeValue({ ...res.task });
        this._utilsService.dismiss();
        setTimeout(() => {
          this._modalCtrl.dismiss();
          this._utilsService.presentToast(res.message, 'success');
        }, 500)
      });
    }
  }

  public onUpdateTaskEvent(task: any) {
    this._utilsService.present('Please wait...');
    return this._tasksService.updateTask(task._id, task).toPromise();
  }

  public onCreateTaskEvent(title: any, description: any) {
    this._utilsService.present('Please wait...');
    return this._tasksService.createTask(title, description).toPromise();
  }
}
