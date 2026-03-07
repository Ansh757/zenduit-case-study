import { Component } from '@angular/core';
import { Subheader } from '../../components/subheader/subheader';
import { Utility } from '../../components/utility/utility';
import { Table } from '../../components/table/table';
import { MOCK_REPORTS } from '../../data/mock_reports';
import { Report } from '../../model/report.type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reports',
  imports: [CommonModule, Subheader, Utility, Table],
  templateUrl: './reports.html',
  styleUrl: './reports.scss',
})

export class ReportsComponent {
  currentPage = 1;
  pageSize = 5; // Default to 5
  title="All Reports";
  searchHeight="2rem";
  searchWidth="20rem";
  addBtnTitle="Report";
  selectedSort = 'Newest';
  searchTerm = '';
  columns: string[] = ['','Created','Modified','Owner', 'From'];
  
  // Mock Report Data
  reports: Report[] = MOCK_REPORTS;

  // Getters 
  get totalReports() { return this.filteredReports.length; }
  get totalPages() { return Math.ceil(this.totalReports / this.pageSize); }
  get startIndex() { return (this.currentPage - 1) * this.pageSize; }
  get endIndex() { return Math.min(this.startIndex + this.pageSize, this.totalReports); }
  get paginatedReports() { return this.sortedReports.slice(this.startIndex, this.endIndex); }
  get pages() { return Array.from({ length: this.totalPages }, (_, i) => i + 1); }
  goToPage(page: number) { this.currentPage = page; }

  // Pagination helpers
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  // Filtering
    get filteredReports() {
    const _term = this.searchTerm.trim().toLowerCase();

    if (!_term) {
      return this.reports;
    }

    return this.reports.filter((report) =>
      report.title.toLowerCase().includes(_term) ||
      report.owner.toLowerCase().includes(_term) ||
      report.from.toLowerCase().includes(_term)
    );
  }

  onSearchChange(value: string) {
    this.searchTerm = value;
    this.currentPage = 1;
  }

  onSortChange(value: string) {
  this.selectedSort = value;
  this.currentPage = 1;
  }

  // Sort Functionality via cases
  get sortedReports() {
    const reports = [...this.filteredReports];

    switch (this.selectedSort) {
      case 'Oldest':
        return reports.sort(
          (x, y) => new Date(x.created).getTime() - new Date(y.created).getTime()
        );

      case 'Name':
        return reports.sort((x, y) => x.title.localeCompare(y.title));

      case 'Newest':
      default:
        return reports.sort(
          (x, y) => new Date(y.created).getTime() - new Date(x.created).getTime()
        );
    }
  }

  // Delete Functionality 
  deleteReport(reportToDel: Report) {
    const confirm = window.confirm(`Delete ${reportToDel.title} ?`);

    if (!confirm) { return; }
    
    this.reports = this.reports.filter((r) => r.id !== reportToDel.id);

    if (this.currentPage > this.totalPages) {
      this.currentPage =  Math.max(this.totalPages, 1);
    }
  }

}
