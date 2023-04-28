import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CoreserviceService {

  constructor(private _snackBar: MatSnackBar) { }


  openSnackBar(message : any, action : any = 'ok') {
    this._snackBar.open(message,action, {
      duration: 3000,
      verticalPosition : 'top',
    });
  }

}