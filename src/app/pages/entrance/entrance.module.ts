import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { EntranceRoutingModule } from './entrance-routing.module'
import { EntranceComponent } from './entrance.component'
import { SharedModule } from '../../shared/shared.module'
import { MdButtonModule, MdCardModule, MdInputModule } from '@angular/material'

@NgModule({
  imports: [
    CommonModule,
    EntranceRoutingModule,
    SharedModule,
    MdInputModule,
    MdButtonModule,
    MdCardModule,
  ],
  declarations: [EntranceComponent, LoginComponent, RegisterComponent]
})
export class EntranceModule { }
