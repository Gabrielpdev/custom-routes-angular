import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from '@spartacus/core';

import { CurrentProductService, OutletPosition } from '@spartacus/storefront';
import { Observable } from 'rxjs';

@Component({
  selector: 'custom-outlets',
  templateUrl: './outlet.component.html',
  styleUrls: ['./outlet.component.scss'],
})
export class OutletCustomComponent implements OnInit {
  outletPosition = OutletPosition;

  constructor() {}

  ngOnInit(): void {}
}
