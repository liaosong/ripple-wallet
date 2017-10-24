import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component'


const routes: Routes = [
  {
    path: 'error',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'error',
    pathMatch: 'full'
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
  constructor() {}
}
