import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HistoryComponent } from './history.component'

export const routes: Routes = [
  {
    path: '',
    component: HistoryComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class HistoryRoutingModule {
}
