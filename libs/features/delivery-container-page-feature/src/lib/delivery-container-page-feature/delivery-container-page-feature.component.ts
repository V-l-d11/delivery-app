import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  UiFooterDeliveryComponent,
  NavBarDeliveryComponent,
} from '@deliv-app/ui-layout';

@Component({
  selector: 'lib-delivery-container-page-feature',
  standalone: true,
  templateUrl: './delivery-container-page-feature.component.html',
  styleUrl: './delivery-container-page-feature.component.css',
  imports: [
    CommonModule,
    RouterModule,
    UiFooterDeliveryComponent,
    NavBarDeliveryComponent,
  ],
})
export class DeliveryContainerPageFeatureComponent {}
