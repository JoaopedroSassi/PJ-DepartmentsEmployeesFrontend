import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Depart } from '../show-dep/show-dep.component';

@Component({
  selector: 'app-add-edit-dep',
  templateUrl: './add-edit-dep.component.html',
  styleUrls: ['./add-edit-dep.component.css']
})

export class AddEditDepComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() dep:Depart;

  id:number;
  name:string;
  initials:string;

  ngOnInit(): void {
    this.id = this.dep.id;
    this.name = this.dep.name;
    this.initials = this.dep.initials;
  }

  addDepartment(){
    var val = {id:this.id, name:this.name, initials:this.initials};

    this.service.addDepartment(val).subscribe(res => {
      alert("Department was added!");
    });
  }

  updateDepartment(){
    var val = {id:this.id, name:this.name, initials:this.initials};

    this.service.updateDepartment(val).subscribe(res => {
      alert("Department was updated!");
    });
  }
}
