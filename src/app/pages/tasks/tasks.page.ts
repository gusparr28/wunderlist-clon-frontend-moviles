import { Component } from '@angular/core';
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
  public changeSubscription: Subscription

  public tasksPinned: any[] = []
  public tasksNotPinned: any[] = []

  constructor(private _tasksService: TasksService,
    private _modalCtrl: ModalController
  ) {
    this.changeSubscription = this._tasksService.detectChange().subscribe((res) => {
      this.tasks = [...this.tasks, res];
      this.tasksNotPinned = this.tasks.filter(v => v.pinned == false)
      this.tasksPinned = this.tasks.filter(v => v.pinned == true)
    })
  }

  ngOnInit() {
    this.tasksSubscription = this._tasksService.getTasksByUser().subscribe((res: any) => {
      this.tasks = res.tasks;
      this.tasksNotPinned = this.tasks.filter(v => v.pinned == false)
      this.tasksPinned = this.tasks.filter(v => v.pinned == true)
    })
  }

  ionViewWillEnter() {
    this.tasksSubscription = this._tasksService.getTasksByUser().subscribe((res: any) => {
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
