import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Students CEL';

  id:any='';
  name:string='';
  department:string='';
  semester:string='';
  age:any='';

  public studentInformation:any=[{id:this.id,name:this.name,department:this.department,semester:this.semester,age:this.age}];

  
  showInformation()
  {
    this.studentInformation.push({id:this.id,name:this.name,department:this.department,semester:this.semester,age:this.age});
  }
  
}
