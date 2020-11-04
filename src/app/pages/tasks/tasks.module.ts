import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TasksPage } from './tasks.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { TasksPageRoutingModule } from './tasks-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { ModalComponent } from 'src/app/components/modal/modal.component';

@NgModule({ 
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    TasksPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TasksPage]
})
export class TasksPageModule { }
