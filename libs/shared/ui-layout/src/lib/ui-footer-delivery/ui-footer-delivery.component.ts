import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Column {
  label: string;
  open: boolean;
  subColumns: SubColumn[];
}

type SubColumn = {
  label: string;
  open: boolean;
};

@Component({
  selector: 'delivery-ui-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui-footer-delivery.component.html',
  styleUrl: './ui-footer-delivery.component.css',
})
export class UiFooterDeliveryComponent {
  @Input()
  public color: 'primary' | 'secondary' = 'primary';
  @Input()
  columns: Column[] = [];
  @Output() toggleColumn = new EventEmitter<Column>();
  @Output() toggleSubColumn = new EventEmitter<{
    column: Column;
    subColumn: SubColumn;
  }>();

  onToggleColumn(column: Column) {
    this.toggleColumn.emit(column);
  }

  onToggleSubColumn(column: Column, subColumn: any) {
    this.toggleSubColumn.emit({ column, subColumn });
  }
}
