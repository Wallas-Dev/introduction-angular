import { Component } from '@angular/core';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css']
})
export class SchoolsComponent {
  aceeptNewSchool = false;
  stateSchool = "Nenhuma escola criada";
  schoolName = "";
  schoolCreated: boolean = false
  schools = ['Escola 1', 'Esolca 2'];

  ngOnInit(): void {
      setTimeout(() => {
        this.aceeptNewSchool = true;
      }, 2000);
  }

  createSchool(){
    this.stateSchool = "Escola foi criada: "+ this.schoolName;
    this.schoolCreated = true
    this.schools.push(this.schoolName)
  }

  updateSchoolName(event: Event){
    this.schoolName = (<HTMLInputElement>event.target).value;
  }
}

