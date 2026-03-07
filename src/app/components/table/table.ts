import { Component, input, signal, output } from '@angular/core';
import { Report } from '../../model/report.type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.html',
  styleUrl: './table.scss',
})
export class Table {
  columns = input<string[]>([]);
  reports = input<Report[]>([]);
  deleteReport = output<Report>();
  selectedRow = signal<number | null>(null);

  selectRow(index: number) {
    this.selectedRow.set(this.selectedRow() === index ? null : index)
  }

}
