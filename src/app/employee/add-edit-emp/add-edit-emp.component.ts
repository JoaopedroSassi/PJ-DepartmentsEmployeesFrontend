import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../show-emp/show-emp.component';
import { SharedService } from 'src/app/shared.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {

  constructor(private service:SharedService, private route: ActivatedRoute) { }

  @Input() emp:Employee;

  id:number;
  name:string;
  rg:string;
  departmentId:number;

  ngOnInit(): void {
    this.route.params.subscribe(params => this.departmentId = params['depId']);

    this.id = this.emp.id;
    this.name = this.emp.name;
    this.rg = this.emp.rg;
    this.departmentId = this.emp.departmentId;
  }

  addEmployee(){
    var val = {id:this.id, name:this.name, rg:this.rg, departmentId:this.departmentId};

    this.service.addEmployee(val).subscribe(res => {
      alert("Employee was added!");
    });
  }

  updateEmployee(){
    var val = {id:this.id, name:this.name, rg:this.rg, departmentId:this.departmentId};

    this.service.updateEmployee(val).subscribe(res => {
      alert("Employee was updated!");
    });
  }
}
