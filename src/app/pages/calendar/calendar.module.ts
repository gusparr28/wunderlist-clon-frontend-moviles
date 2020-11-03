import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalendarPage } from './calendar.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { CalendarPageRoutingModule } from './calendar-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    CalendarPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CalendarPage]
})
export class CalendarPageModule { }
