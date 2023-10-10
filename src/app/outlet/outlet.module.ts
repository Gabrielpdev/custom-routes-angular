import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OutletRefModule, PageComponentModule } from '@spartacus/storefront';

import { OutletCustomComponent } from './outlet.component';
import { RouterModule } from '@angular/router';
import { ConfigModule } from '@spartacus/core';

@NgModule({
  imports: [OutletRefModule, CommonModule, RouterModule, PageComponentModule],
  declarations: [OutletCustomComponent],
  // exports: [OutletCustomComponent],
  providers: [],
})
export class OutletModule {}
