import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { MainComponent } from './main.component'

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full',
      },
      {
        path: 'overview',
        loadChildren: 'app/pages/main/overview/overview.module#OverviewModule',
      },
      {
        path: 'history',
        loadChildren: 'app/pages/main/history/history.module#HistoryModule',
      },
      {
        path: 'send',
        loadChildren: 'app/pages/main/send/send.module#SendModule',
      }
    ],
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class MainRoutingModule {
  constructor() {
  }
}
