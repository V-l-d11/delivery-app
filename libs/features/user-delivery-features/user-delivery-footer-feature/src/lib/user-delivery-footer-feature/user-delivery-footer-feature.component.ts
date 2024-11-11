import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiFooterDeliveryComponent } from '@deliv-app/ui-layout';

@Component({
  selector: 'lib-user-delivery-footer-feature',
  standalone: true,
  imports: [CommonModule, UiFooterDeliveryComponent],
  templateUrl: './user-delivery-footer-feature.component.html',
  styleUrl: './user-delivery-footer-feature.component.css',
})
export class UserDeliveryFooterFeatureComponent {}
