import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent, ColumnMode } from '@swimlane/ngx-datatable';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.scss']
})
export class MaterialsComponent {
  materials = [];
  tools = [];
  equipments = [];
  Materialcolumns = [{ name: 'Material List(Cost code)' }, { name: 'Batch No. /  Quantity' }, { name: 'Beacon Code' }, { name: 'Battery%' }];
  Toolcolumns = [{ name: 'Tool List' }, { name: 'Batch' }, { name: 'Location' }];
  Equipmentcolumns = [{ name: 'Equipment' }, { name: 'Beacon Code' }, { name: 'Location' }];


  @ViewChild(DatatableComponent) table: DatatableComponent;

  ColumnMode = ColumnMode;

  constructor(private route: ActivatedRoute,  
    private dialog: MatDialog) {
    this.fetchMaterials(data => {
      this.materials = data;
    });
    this.fetchTools(data => {
      this.tools = data;
    });
    this.fetchEquipment(data => {
      this.equipments = data;
    });
   }

   fetchMaterials(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/materials.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }
  fetchTools(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/toolbox.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }
  fetchEquipment(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/equipment.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

}
