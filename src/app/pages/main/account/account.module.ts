import { NgModule } from '@angular/core'
import { AccountComponent } from './account.component'
import { CommonModule } from '@angular/common'
import { AccountRoutingModule } from './account-routing.module'
import { AccountListComponent } from './account-list/account-list.component'
import { AccountCreateComponent } from './account-create/account-create.component'
import { MdButtonModule, MdCardModule, MdDialogModule, MdInputModule, MdTabsModule } from '@angular/material'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { SuccessTipComponent } from './account-create/success-tip/success-tip.component'


@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule,
    MdCardModule,
    MdTabsModule,
    MdButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MdInputModule,
    HttpClientModule,
    MdDialogModule,
  ],
  exports: [],
  declarations: [AccountComponent, AccountListComponent, AccountCreateComponent, SuccessTipComponent],
  entryComponents: [SuccessTipComponent],
  providers: [],
})
export class AccountModule {
}
