import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TasksService } from 'src/app/services/tasks.service';

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

  constructor(public modalCtrl: ModalController, private _tasksService: TasksService) { }

  ngOnInit() {
    if (this.task) {
      this.title = this.task["title"];
      this.description = this.task["description"];
    }
  }

  // public changePinned() {
  //   this.task.pinned = !this.task.pinned
  // }

  public togglePinnedIcon() {
    if (this.pinnedIcon == 'eyedrop-outline') {
      this.pinnedIcon = 'eyedrop';
    } else {
      this.pinnedIcon = 'eyedrop-outline';
    }
  }

  public goBack() {
    this.modalCtrl.dismiss();
  }

  public createTask(title: any, description: any) {

    if (this.task) {
      //End point de editar
      this._tasksService.updateTask(this.task.id, { title: this.title, description: this.description })

    } else {
      this.onCreateTaskEvent(title, description).then((res: any) => {
        this._tasksService.changeValue({ ...res.task });
        this.modalCtrl.dismiss();
      })
    }
  }

  public onUpdateTaskEvent(id, task) {
    return
  }

  public onCreateTaskEvent(title, description) {
    return this._tasksService.createTask(title, description).toPromise();
  }
}
