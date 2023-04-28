import { Component, OnInit, ViewChild, AfterViewInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/user.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmpAddEditComponent } from '../emp-add-edit/emp-add-edit.component';
import { CoreserviceService } from 'src/app/core/coreservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  public userdata : any ;
  public home: any;
  public town: any;
  // Adding more variables in the file
  // services are used to share information among all the components

  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'email','dob','education','company','experience','package','gender','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private http : HttpClient, private empser: UserService, public dialog : MatDialog,
    // @Inject(MAT_DIALOG_DATA) private data:any
    private coreser : CoreserviceService
    ) { }

  ngOnInit(): void {

   // this.userdata = this.userser.getUsers();
      this.getemps();
     
      this
      

  }

  
  // To Get the Employee
  getemps(){
    this.empser.getEmployees().subscribe({
      next : (res) => {
         this.dataSource = new MatTableDataSource(res);
         this.dataSource.sort = this.sort;
         this.dataSource.paginator = this.paginator;
      },
      error : console.log
    })
}


 // Delete employee
 deleteemp(id:any){

  if(confirm("Are you sure to delete "+id)) {
    this.empser.deleteEmployee(id).subscribe({
      next : (res) => {
           this.coreser.openSnackBar('Deleted Sucessfully','done')
           this.getemps();
      },
      error : (err) => {
        console.error(err);
      }
    })
  }

}

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}

// openEditForm(data : any){
//       this.dialog.open(EmpAddEditComponent,{
//         data,
//       })
// }


openEditForm(data:any){
  this.dialog.open(EmpAddEditComponent,{
    data
  })
}


    



}
