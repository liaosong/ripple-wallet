import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { EntranceComponent } from './entrance.component'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { RegisterSuccessComponent } from './register-success/register-success.component'

export const routes: Routes = [
    {
        path: '',
        component: EntranceComponent,
        children: [
            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full',
            },
            {
                path: 'login',
                component: LoginComponent,
            },
            {
                path: 'register',
                component: RegisterComponent,
            },
            {
              path: 'register-success',
              component: RegisterSuccessComponent,
            },
        ],
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class EntranceRoutingModule {
}
