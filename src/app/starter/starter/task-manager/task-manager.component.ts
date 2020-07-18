import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { PopupComponent } from './popup/popup.component';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TaskManagerComponent {
  rows = [];
  columns = [{ name: 'Foreman' }, { name: 'Task' }, { name: 'Work Zone' }];
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
    req.open('GET', `assets/data/foreman.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  open(){
    const dialogRef= this.dialog.open(PopupComponent);
  }


}
