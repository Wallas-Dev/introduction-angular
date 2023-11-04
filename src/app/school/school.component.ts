import { Component } from "@angular/core";

@Component({
    selector: 'app-school',
    templateUrl: './school.component.html',
    styles: [`
        .aberta{
            color: white
        }
    `]
})

export class SchoolComponent {
    schoolId = 10
    schoolName = "Colégio Lia"
    schoolSituation = 'Fechada'

    constructor(){
        this.schoolSituation = Math.random() > 0.5 ? 'Aberta' : 'Fechada';
    }
    
    getSchoolName(){
        console.log(this.schoolSituation);
        return this.schoolName
    }
    getStatusColor(){
        return this.schoolSituation === 'Aberta' ? 'green' : 'red'
    }
}