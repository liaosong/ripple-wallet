import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SendComponent } from './send.component'
import { SendRoutingModule } from './send-routing.module'

@NgModule({
  imports: [
    CommonModule,
    SendRoutingModule
  ],
  declarations: [SendComponent]
})
export class SendModule { }
