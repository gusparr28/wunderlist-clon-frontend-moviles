import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  public pinnedIcon: String = 'eyedrop-outline';
  public title: String;
  public description: String;

  constructor(private _modalCtrl: ModalController, private _tasksService: TasksService) { }

  ngOnInit() { }

  public togglePinnedIcon() {
    if (this.pinnedIcon == 'eyedrop-outline') {
      this.pinnedIcon = 'eyedrop';
    } else {
      this.pinnedIcon = 'eyedrop-outline';
    }
  }

  public goBack() {
    this._modalCtrl.dismiss();
  }

  public createTask(title: any, description: any) {
    console.log(title, description);
    this._tasksService.createTask(title, description).subscribe((res: any) => {
      this.title = res.task.title;
      this.description = res.task.description;
    })
    this._modalCtrl.dismiss();
  }
}
