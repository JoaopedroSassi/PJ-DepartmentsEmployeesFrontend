import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { DepartmentComponent } from '../department.component';

@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})

export class ShowDepComponent implements OnInit {

  constructor(private service:SharedService) { }

  DepartmentList:any=[];

  ModalTitle:string;
  ActivateAddEditDepComp:boolean = false;
  dep: any;

  ngOnInit(): void {
    this.refreshDep();
  }

  addClick(){
    this.dep={
      id:0,
      name:"",
      initials:""
    }

    this.ModalTitle="Add department";
    this.ActivateAddEditDepComp = true;
  }

  closeClick(){
    this.ActivateAddEditDepComp=false;
    this.refreshDep();
  }

  editClick(item:any){
    this.dep=item;
    this.ModalTitle="Edit department";
    this.ActivateAddEditDepComp=true;
  }

  refreshDep(){
    this.service.getDepList().subscribe(data => {
      this.DepartmentList=data;
    });
  }



}
