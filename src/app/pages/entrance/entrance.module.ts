import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { EntranceRoutingModule } from './entrance-routing.module'
import { EntranceComponent } from './entrance.component'
import { SharedModule } from '../../shared/shared.module'
import { MdButtonModule, MdCardModule, MdInputModule } from '@angular/material'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { RegisterSuccessComponent } from './register-success/register-success.component'

@NgModule({
  imports: [
    CommonModule,
    EntranceRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MdInputModule,
    MdButtonModule,
    MdCardModule,
  ],
  declarations: [EntranceComponent, LoginComponent, RegisterComponent, RegisterSuccessComponent]
})
export class EntranceModule { }
