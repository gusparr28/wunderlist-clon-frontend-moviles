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
  public changeSubscription: Subscription;
  public tasksPinned: any[] = [];
  public tasksNotPinned: any[] = [];
  public searchTask: any = '';

  constructor(private _tasksService: TasksService,
    private _modalCtrl: ModalController,
  ) {
    this.changeSubscription = this._tasksService.detectChange().subscribe((res) => {
      const index = this.tasks.findIndex((v: any) => v._id === res._id);
      if (index !== -1) {
        this.tasks[index] = res;
      } else {
        this.tasks = [...this.tasks, res];
      };
      this.tasksNotPinned = this.tasks.filter((t: any) => t.pinned == false);
      this.tasksPinned = this.tasks.filter((t: any) => t.pinned == true);
    });
  }

  ngOnInit() {
    this.fixError();
    this._tasksService.getTasksByUser().subscribe((res: any) => {
      console.log(res.tasks);
      this.tasks = res.tasks;
    });
  }

  public fixError() {
    this.tasksSubscription = this._tasksService.getTasksByUser().subscribe((res: any) => {
      this.tasks = res.tasks;
      this.tasksNotPinned = this.tasks.filter((t: any) => t.pinned == false);
      this.tasksPinned = this.tasks.filter((t: any) => t.pinned == true);
    });
  }

  public searchTasks(event) {
    // console.log(event);
    this.searchTask = event.detail.value;
  }

  ionViewDidLeave() {
    this.tasksSubscription.unsubscribe();
    this.changeSubscription.unsubscribe();
  }

  public async showModal() {
    const modal = await this._modalCtrl.create({
      component: ModalComponent,
      cssClass: 'my-custom-modal'
    });
    return await modal.present();
  }
}
