import { ContentComponent } from './starter/content/content.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StarterComponent } from './starter/starter.component';
import { ListComponent } from './starter/list/list.component';
import { WorkersComponent } from './starter/workers/workers.component';
import { MaterialsComponent } from './starter/materials/materials.component';
import { BudgetComponent } from './starter/budget/budget.component';
import { TaskManagerComponent } from './starter/task-manager/task-manager.component';
import { KpisComponent } from './starter/kpis/kpis.component';


const routes: Routes = [
  {
    path: '',
    component: StarterComponent,
    children: [
      {
        path: '',
        component: ContentComponent
      },
      {
        path: 'list',
        component: ListComponent
      },
      {
        path: 'worker',
        component: WorkersComponent,
      },
      {
        path: 'materials',
        component: MaterialsComponent,
      },
      {
        path: 'budget',
        component: BudgetComponent,
      },
      {
        path: 'task-manager',
        component: TaskManagerComponent,
      },
      {
        path: 'kpi',
        component: KpisComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarterRoutingModule { }
