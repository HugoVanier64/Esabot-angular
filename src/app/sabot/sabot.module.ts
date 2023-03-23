import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SabotRoutingModule } from './sabot-routing.module';
import { SabotListComponent } from './sabot-list/sabot-list.component';


@NgModule({
  declarations: [
    SabotListComponent
  ],
  imports: [
    CommonModule,
    SabotRoutingModule
  ]
})
export class SabotModule { }
