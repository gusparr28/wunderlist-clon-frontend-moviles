import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { TasksPage } from 'src/app/pages/tasks/tasks.page';
import { TasksService } from 'src/app/services/tasks.service';
import { UtilsService } from 'src/app/services/utils.service';

import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {

  @Input() task: any;

  constructor(private _modalCtrl: ModalController,
    private _alertCtrl: AlertController,
    private _tasksService: TasksService,
    private _utilsService: UtilsService
  ) { }

  ngOnInit() { }

  public async viewTask(task: any) {
    const modal = await this._modalCtrl.create({
      component: ModalComponent,
      componentProps: {
        task
      },
      cssClass: 'my-custom-modal'
    });
    return await modal.present();
  }

  public async deleteTask() {
    const alert = await this._alertCtrl.create({
      header: 'Are you sure, you want to delete it?',
      message: 'Be careful!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        }, {
          text: 'Delete',
          handler: () => {
            this._utilsService.present('Please wait...');
            this._tasksService.deleteTask(this.task._id).subscribe((res: any) => {
              this._utilsService.dismiss();
              setTimeout(() => {
                
                this._utilsService.presentToast(res.message, 'danger');
              }, 500);
            });
          }
        }
      ]
    });
    await alert.present();
  }
}
