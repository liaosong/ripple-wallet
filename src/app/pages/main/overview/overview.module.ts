import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { OverviewComponent } from './overview.component'
import { OverviewRoutingModule } from './overview-routing.module'
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  imports: [
    CommonModule,
    OverviewRoutingModule,
    HttpClientModule,
  ],
  declarations: [OverviewComponent],
  exports: [OverviewComponent]
})
export class OverviewModule { }
