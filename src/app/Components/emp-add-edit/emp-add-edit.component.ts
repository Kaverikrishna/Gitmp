import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CoreserviceService } from 'src/app/core/coreservice.service';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.css']
})
export class EmpAddEditComponent implements OnInit {

  empForm : FormGroup;
  data : any;

  public Education = [
    'Diploma',
    'Graduation',
    'BTech',
    'MBA'
  ];

  constructor(public rout: Router, private fb : FormBuilder, private empser : UserService, private dialogref : DialogRef<EmpAddEditComponent>,
    private dialog : MatDialog, private coreser: CoreserviceService ) { 
    this.empForm = this.fb.group({
       firstname : '',
       lastname : '',
       email : '',
       dob : '',
       education : '',
       company : '',
       experience : '',
       package : '',
       gender : ''
    })
  }

  ngOnInit(): void {
      this.getemps();
      this.empForm.patchValue(this.data);
  }

    // To Add the Employee
  onFormsubmit(){
      if(this.empForm.valid){
           this.empser.addEmployee(this.empForm.value).subscribe({
            next : (val : any) => {
                //  alert("Employee Added Successfully");
                this.coreser.openSnackBar('Employee Added','done')
                 window.location.reload();
                 this.getemps();
                 this.dialogref.close();
                 this.rout.navigate(['']);
            },
            error: (err) => {
              console.error(err);
            }
           })
      }
  }

  // To Get the Employee
  getemps(){
      this.empser.getEmployees().subscribe({
        next : (res) => {
             console.log(res)
        },
        error : console.log
      })
  }
   
  

  
openEditForm(data:any){
  this.dialog.open(EmpAddEditComponent,{
    data
  })
}

 

  close(){
    this.dialogref.close();
  }

}
