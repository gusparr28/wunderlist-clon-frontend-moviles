import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewTaskPageRoutingModule } from './view-task-routing.module';

import { ViewTaskPage } from './view-task.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewTaskPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ViewTaskPage]
})
export class ViewTaskPageModule {}
