import { CommonModule } from '@angular/common';
import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-utility',
  imports: [CommonModule],
  templateUrl: './utility.html',
  styleUrl: './utility.scss',
})
export class Utility {
  width = input<string>('2rem');
  height = input<string>('1rem');
  addBtnTitle = input<string>('Default');
  isSortOpen = signal(false);
  selectedSort = signal('Newest');
  sortChange = output<string>();
  searchChange = output<string>();

  onSearch(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    this.searchChange.emit(value);
  }

  toggleSortMenu() {
    this.isSortOpen.set(!this.isSortOpen());
  }

  selectSort(value: string) {
    this.selectedSort.set(value);
    this.isSortOpen.set(false);
    this.sortChange.emit(value)
  }
}
