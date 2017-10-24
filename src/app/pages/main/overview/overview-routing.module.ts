import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { OverviewComponent } from './overview.component'

export const routes: Routes = [
  {
    path: '',
    component: OverviewComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class OverviewRoutingModule {
}
