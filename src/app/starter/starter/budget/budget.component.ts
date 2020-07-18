import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent, ColumnMode } from '@swimlane/ngx-datatable';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent  {
  rows = [];
  columns = [{ name: 'Task' }, { name: 'Budget Hours' }, { name: 'Budget Material' }, { name: 'Budget Quantity' }, { name: 'Work zone' }];
  @ViewChild(DatatableComponent) table: DatatableComponent;

  ColumnMode = ColumnMode;

  constructor(private route: ActivatedRoute,  
    private dialog: MatDialog) {
    this.fetch(data => {
      this.rows = data;
    });
   }

   fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/budget.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };
    req.send();
  }

}
