import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from './Components/emp-add-edit/emp-add-edit.component';
import { CoreserviceService } from './core/coreservice.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Github';

  constructor(private dialog: MatDialog, private coreser : CoreserviceService){

  }

    openAddEditEmpForm(){
      this.dialog.open(EmpAddEditComponent)
    }



}
