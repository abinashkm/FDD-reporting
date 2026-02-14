import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartOptions } from 'chart.js';

import { UserService } from '../../core/services/user.service';
import { SiteService } from '../../core/services/site.service';
import { TestTypeService } from '../../core/services/test-type.service';
import { TestService } from '../../core/services/test.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    MatCardModule,
    MatIconModule,
    MatProgressSpinnerModule,
    BaseChartDirective
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  isLoading = true;
  cols = 4;

  stats = [
    { title: 'Total Users', value: 0, icon: 'people' },
    { title: 'Total Sites', value: 0, icon: 'location_on' },
    { title: 'Test Types', value: 0, icon: 'category' },
    { title: 'Total Tests', value: 0, icon: 'science' }
  ];

  // ================= Doughnut =================
  public doughnutChartType: 'doughnut' = 'doughnut';
  public doughnutChartData: ChartConfiguration<'doughnut'>['data'] = {
    labels: [],
    datasets: [{ data: [] }]
  };
  public doughnutChartOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { position: 'bottom' } }
  };

  // ================= Line =================
  public lineChartType: 'line' = 'line';
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [
      {
        label: 'Monthly Tests',
        data: [],
        tension: 0.3,
        borderColor: '#4b7f3b',
        backgroundColor: 'rgba(75,127,59,0.15)',
        fill: true
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false
  };

  // ================= Bar =================
  public barChartType: 'bar' = 'bar';
  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [],
    datasets: [
      {
        label: 'Tests per Site',
        data: [],
        backgroundColor: '#7aa95c'
      }
    ]
  };
  public barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'y'
  };

  constructor(
    private breakpointObserver: BreakpointObserver,
    private userService: UserService,
    private siteService: SiteService,
    private testTypeService: TestTypeService,
    private testService: TestService
  ) {}

  ngOnInit(): void {
    this.handleResponsive();

    // Simulated async loading
    setTimeout(() => {
      this.loadStats();
      this.loadDoughnutChart();
      this.loadLineChart();
      this.loadBarChart();
      this.isLoading = false;
    }, 600);
  }

  handleResponsive() {
    this.breakpointObserver.observe([
      Breakpoints.Handset,
      Breakpoints.Tablet
    ]).subscribe(result => {
      if (result.breakpoints[Breakpoints.Handset]) {
        this.cols = 1;
      } else if (result.breakpoints[Breakpoints.Tablet]) {
        this.cols = 2;
      } else {
        this.cols = 4;
      }
    });
  }

  loadStats() {
    this.userService.getUsers().subscribe(users => {
      this.stats[0].value = users.length;
    });

    this.siteService.getSites().subscribe(sites => {
      this.stats[1].value = sites.length;
    });

    this.testTypeService.getTestTypes().subscribe(types => {
      this.stats[2].value = types.length;
    });

    this.testService.getTests().subscribe(tests => {
      this.stats[3].value = tests.length;
    });
  }

  loadDoughnutChart() {
    this.testService.getTests().subscribe(tests => {
      const grouped: any = {};

      tests.forEach(test => {
        grouped[test.testType] = (grouped[test.testType] || 0) + 1;
      });

      this.doughnutChartData = {
        labels: Object.keys(grouped),
        datasets: [
          {
            data: Object.values(grouped),
            backgroundColor: [
              '#4b7f3b',
              '#7aa95c',
              '#c2a83e',
              '#b5651d',
              '#8fbc8f'
            ]
          }
        ]
      };
    });
  }

  loadLineChart() {
    this.testService.getTests().subscribe(tests => {
      const monthly: any = {};

      tests.forEach(test => {
        const month = new Date(test.date)
          .toLocaleString('default', { month: 'short' });

        monthly[month] = (monthly[month] || 0) + 1;
      });

      this.lineChartData = {
        labels: Object.keys(monthly),
        datasets: [
          {
            label: 'Monthly Tests',
            data: Object.values(monthly),
            tension: 0.3,
            borderColor: '#4b7f3b',
            backgroundColor: 'rgba(75,127,59,0.15)',
            fill: true
          }
        ]
      };
    });
  }

  loadBarChart() {
    this.testService.getTests().subscribe(tests => {
      const grouped: any = {};

      tests.forEach(test => {
        grouped[test.site] = (grouped[test.site] || 0) + 1;
      });

      this.barChartData = {
        labels: Object.keys(grouped),
        datasets: [
          {
            label: 'Tests per Site',
            data: Object.values(grouped),
            backgroundColor: '#7aa95c'
          }
        ]
      };
    });
  }
}
