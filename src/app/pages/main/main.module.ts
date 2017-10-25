import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MainRoutingModule } from './main-routing.module'
import { MainComponent } from './main.component'
import { MdButtonModule } from '@angular/material'

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    MdButtonModule,
  ],
  declarations: [MainComponent],
  exports: [MainComponent]
})
export class MainModule { }
