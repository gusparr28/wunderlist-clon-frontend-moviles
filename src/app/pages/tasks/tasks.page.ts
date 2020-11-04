import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { ModalComponent } from 'src/app/components/modal/modal.component';

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
  public tasksSubscription: Subscription;

  constructor(private _tasksService: TasksService,
    private _modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this._tasksService.getTasksByUser().subscribe((res: any) => {
      this.tasks = res.tasks;
    })
  }

  ionViewDidLeave() {
    this.tasksSubscription.unsubscribe();
  }

  public async showModal() {
    const modal = await this._modalCtrl.create({
      component: ModalComponent,
      cssClass: 'my-custom-modal'
    });
    return await modal.present();
  }

}
