import { Component, ViewChild , OnDestroy, OnInit } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit ,OnDestroy {
  @ViewChild(BaseChartDirective) pie: BaseChartDirective | undefined;
  @ViewChild(BaseChartDirective) baseChart: BaseChartDirective | undefined;


  constructor() {
   
   }

  
   // Bar
   public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 0,
        max:100
      }
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'right',
        color: '#183850',
        borderColor:'#6495ED',
        font: {
          weight: 'bold'
        }
        
      }
    }
  };

  //Bar
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
    DataLabelsPlugin
  ];

  // Bar
  public barChartData: ChartData<'bar'> = {
    labels: [ '2016', '2017', '2018', '2019', '2020', '2021', '2022' ],
    datasets: [
      {
         data: [ 65, 59, 80, 81, 56, 55, 40 ],
         label: 'Series A' ,
         backgroundColor: '#FFB6C1',
         hoverBackgroundColor: '#FFB6C1',
         borderColor:'#FFB6C1',
         } ,
      {
         data: [ 28, 48, 40, 19, 86, 27, 90 ],
        label: 'Series B'
       },
      
    ]
  };

    // events
    // public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    //   console.log(event, active);
    // }
  
    // public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    //   console.log(event, active);
    // }

    // public randomize(): void {
    //   // Only Change 3 values
    //   this.barChartData.datasets[0].data = [
    //     Math.round(Math.random() * 100),
    //     59,
    //     80,
    //     Math.round(Math.random() * 100),
    //     56,
    //     Math.round(Math.random() * 100),
    //     40 ];
  
    //   this.baseChart?.update();
    // }
// *********************************************************************************************************************



// DoughnutChart
public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];

public doughnutChartData: ChartData<'doughnut'> = {
  labels: this.doughnutChartLabels,
  datasets: [
    {
       data: [ 350, 450, 100 ]
    },
    { data: [ 50, 150, 120 ] },
    { data: [ 250, 130, 70 ] }
  ]
};

public doughnutChartType: ChartType = 'doughnut';

// events
// public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
//   console.log(event, active);
// }

// public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
//   console.log(event, active);
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////
 
 
  // Pie
 
  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      datalabels: {
        formatter: (value, ctx) => {
          if (ctx.chart.data.labels) {
            return ctx.chart.data.labels[ctx.dataIndex];
          }
        },
      },
    }
  };
  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: [ [ 'Sales' ], [ 'Store' ], 'Mail' ],
    datasets: [ {
      data: [ 300, 500, 100 ]
    } ]
  };

  public pieChartType: ChartType = 'pie';
  public pieChartPlugins = [ DataLabelsPlugin ];

  // events
  // public chartClickedpie({ event, active }: { event: ChartEvent, active: {}[] }): void {
  //   console.log(event, active);
  // }

  // public chartHoveredpie({ event, active }: { event: ChartEvent, active: {}[] }): void {
  //   console.log(event, active);
  // }

/////////////////////////////////////////////////////////////////////////////////////////////////////////

  // Radar
  public radarChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };
  public radarChartLabels: string[] = [ 'Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running' ];

  public radarChartData: ChartData<'radar'> = {
    labels: this.radarChartLabels,
    datasets: [
      { data: [ 65, 59, 90, 81, 56, 55, 40 ], label: 'Series A' },
      { data: [ 28, 48, 40, 19, 96, 27, 100 ], label: 'Series B' }
    ]
  };

  public radarChartType: ChartType = 'radar';

    // events
    // public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    //   console.log(event, active);
    // }
  
    // public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    //   console.log(event, active);
    // }




  ngOnInit(): void {

  

  }

  ngOnDestroy(): void {
   // console.log('Dashboard Destroyed');
  }

  
}
