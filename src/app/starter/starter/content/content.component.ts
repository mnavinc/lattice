import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts'
import { DatatableComponent, ColumnMode } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'start',
        
      
      }
    }
  };
  public barChartLabels: Label[] = ['Demotion Material', 'Shredding/Valut Area-Labour', 'Steel Material', 'Street Labour', 'Cutwork concrete material', 'Masonry material', 'Sheilding Vault Ara material'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Planned' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Actual' }
  ];
  rows = [];

  temp = [];

  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  public pieChartLabels: Label[] = [['Security'], ['Tool Time'], 'Material Storage', 'Loading Dock'];
  public pieChartData: number[] = [300, 500, 100, 100];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [pluginDataLabels];
  public pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
    },
  ];

  columns = [{ prop: 'TASK' }, { name: 'Estimated' }, { name: 'Regular Time' }, { name: 'Over Time' }, { name: 'Double Time' }, { name: 'Total Hours' }];
  @ViewChild(DatatableComponent) table: DatatableComponent;

  ColumnMode = ColumnMode;
  constructor() {
    this.fetch(data => {
      // cache our list
      this.temp = [...data];

      // push our inital complete list
      this.rows = data;
    });
   }

   fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/tasks.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }
  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function (d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  ngOnInit() {
  }
  
  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    const data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    this.barChartData[0].data = data;
  }


  changeLabels() {
    const words = ['masonry', 'cement', 'steel', 'iron', 'safety', 'plastic', 'wood', 'sand', 'daily wage labourers', 'food',
      'logistics', 'settlements', 'paint', 'limestone', 'vehicle', 'crane', 'Bricks', 'stones', 'wire', 'winding', 'power', 'diesel'];
    const randomWord = () => words[Math.trunc(Math.random() * words.length)];
    this.pieChartLabels = Array.apply(null, { length: 3 }).map(_ => randomWord());
  }

  addSlice() {
    this.pieChartLabels.push(['Iron', 'Wood', 'Winding']);
    this.pieChartData.push(400);
    this.pieChartColors[0].backgroundColor.push('rgba(196,79,244,0.3)');
  }

  removeSlice() {
    this.pieChartLabels.pop();
    this.pieChartData.pop();
    this.pieChartColors[0].backgroundColor.pop();
  }

  changeLegendPosition() {
    this.pieChartOptions.legend.position = this.pieChartOptions.legend.position === 'left' ? 'top' : 'left';
  }
}
