import { MoneyPlansComponent } from './money-manage/money-plans/money-plans.component';
import { MoneyDreamComponent } from './money-dream/money-dream.component';
import { MoneyPlanDetailComponent } from './money-manage/money-plan-detail/money-plan-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoneyPageRoutingModule } from './money-routing.module';

import { MoneyPage } from './money.page';
import { SharedModule } from '@core/shared/shared/shared.module';
import { MoneyHistoryComponent } from './money-history/money-history.component';
import { MoneyOverviewComponent } from './money-overview/money-overview.component';
import { MoneyManageComponent } from './money-manage/money-manage.component';
import { AddWalletComponent } from './money-manage/add-wallet/add-wallet.component';
import { AddMoneyComponent } from './add-money/add-money.component';
import { WalletDetailComponent } from './money-manage/wallet-detail/wallet-detail.component';
import { MoneyProgressComponent } from './money-overview/money-progress/money-progress.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoneyPageRoutingModule,
    SharedModule
  ],
  declarations: [MoneyPage, MoneyHistoryComponent, MoneyOverviewComponent,
    MoneyManageComponent, AddWalletComponent, AddMoneyComponent, WalletDetailComponent,
    AddMoneyComponent, MoneyPlanDetailComponent, MoneyDreamComponent, MoneyPlansComponent,
    MoneyProgressComponent],

})
export class MoneyPageModule { }
