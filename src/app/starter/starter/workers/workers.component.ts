import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { DatatableComponent, ColumnMode } from '@swimlane/ngx-datatable';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from './popup/popup.component';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WorkersComponent{

  rows = [];

  temp = [];
  columns = [{ prop: 'FirstName' }, { name: 'Costcode' }, { name: 'Crew' }, { name: 'Company' }, { name: 'Beacon ID' }, { name: 'Battery' }, { name: 'Actions' }];
  @ViewChild(DatatableComponent) table: DatatableComponent;

  ColumnMode = ColumnMode;
  constructor(private route: ActivatedRoute,  
    private dialog: MatDialog) {
    this.fetch(data => {
      // cache our list
      this.temp = [data];

      // push our inital complete list
      this.rows = data;
    });
   }

   fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/workers.json`);

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

  open(){
    const dialogRef= this.dialog.open(PopupComponent);
  }

}
