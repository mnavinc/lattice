import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarterRoutingModule } from './starter-routing.module';
import { StarterComponent } from './starter/starter.component';
import { ContentComponent } from './starter/content/content.component';
import { ControlSideBarComponent } from './starter/control-side-bar/control-side-bar.component';
import { MainSideBarComponent } from './starter/main-side-bar/main-side-bar.component';
import { NavBarComponent } from './starter/nav-bar/nav-bar.component';
import { FooterComponent } from './starter/footer/footer.component';
import { ChartsModule } from 'ng2-charts';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ListComponent } from './starter/list/list.component';
import {MatDialogModule } from '@angular/material/dialog';
import { PopupComponent } from './starter/list/popup/popup.component';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';


@NgModule({
  declarations: [StarterComponent, ContentComponent, ControlSideBarComponent, MainSideBarComponent, NavBarComponent, FooterComponent, ListComponent, PopupComponent],
  imports: [
    CommonModule,
    StarterRoutingModule,
    ChartsModule,
    NgxDatatableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    MatButtonToggleModule
  ]
})
export class StarterModule { }
