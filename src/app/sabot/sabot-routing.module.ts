import { NgModule } from '@angular/core'
import { Routes, RouterModule } from "@angular/router"
import { SabotListComponent } from './sabot-list/sabot-list.component'
const routes: Routes = [
{path: "api/sabots", component: SabotListComponent},
];
@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class SabotRoutingModule { }

