import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: '',
    loadChildren: 'app/pages/main/main.module#MainModule',
  },
  {
      path: 'entrance',
      loadChildren: 'app/pages/entrance/entrance.module#EntranceModule',
  },
  {
      path: 'login',
      redirectTo: 'entrance/login',
      pathMatch: 'full',
  },
  {
      path: 'register',
      redirectTo: 'entrance/register',
      pathMatch: 'full',
  },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class PagesRoutingModule {
    constructor() {
    }
}
