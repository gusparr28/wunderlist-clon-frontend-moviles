import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {

  @Input() task: String;

  constructor(private _router: Router, private _modalCtrl: ModalController) { }

  ngOnInit() { }

  public async viewTask(task) {
    const modal = await this._modalCtrl.create({
      component: ModalComponent,
      componentProps: {
        task
      },
      cssClass: 'my-custom-modal'
    });
    return await modal.present();
  }

}
