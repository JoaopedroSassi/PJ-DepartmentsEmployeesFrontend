import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})

export class ShowEmpComponent implements OnInit {

  ModalTitle:string;
  ActivateAddEditEmpComp:boolean = false;
  emp: Employee;
  department:any;
  depId: number;

  EmployeeList:any=[];

  constructor(private service:SharedService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.depId = params['depId']);
    this.refreshEmp();
  }

  addClick(){
    this.emp={
      id:0,
      name:"",
      rg:"",
      departmentId:this.depId,
      picture:"anonymous.png"
    }

    this.ModalTitle="Add employee";
    this.ActivateAddEditEmpComp = true;
  }

  closeClick(){
    this.ActivateAddEditEmpComp=false;
    this.refreshEmp();
  }

  editClick(item:Employee){
    this.emp=item;
    this.ModalTitle="Edit employee";
    this.ActivateAddEditEmpComp=true;
  }

  refreshEmp(){
    this.service.getEmpList(this.depId).subscribe(data => {
      this.EmployeeList=data;
    });
  }

  deleteClick(id:number){
    if(confirm("Are you sure you want to delete it?"))
      this.service.deleteEmployee(id).subscribe(data => {
        alert("Employee was deleted!");
        this.refreshEmp();
      });
  }
}

export class Employee{
  id:number;
  name:string;
  picture:string;
  rg:string;
  departmentId:number;
}
