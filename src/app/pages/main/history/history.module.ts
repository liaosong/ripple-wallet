import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HistoryComponent } from './history.component'
import { HistoryRoutingModule } from './history-routing.module'

@NgModule({
  imports: [
    CommonModule,
    HistoryRoutingModule
  ],
  declarations: [HistoryComponent]
})
export class HistoryModule { }
