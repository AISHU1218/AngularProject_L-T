import { Component,Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from "../models/Project";
import { ProjectOperationsService } from "../services/projectOperations.services";
import { FormsModule } from "@angular/forms";


@Component({
	selector : 'app-projects-edit',
	template : `
        <h1>Add new projects</h1>
		<section class="edit1">
			<label for="">Project Name :</label>
			<input type="text" [(ngModel)]="newProjectName">
			<span> [ {{newProjectName.length}} ] </span>
			<input type="button" value="Add New" (click)="onAddNewClick()">
		</section>		
		<p>
        <a [routerLink]="['/listOfProjects']">List of projects</a>
    </p>
	`
})
export class ProjectListComponent{
	newProjectName : string = '';

	@Output()
	newProjectCreated : EventEmitter<Project> = new EventEmitter<Project>();

	constructor(private projectOperations : ProjectOperationsService,
		private router : Router){

	}
	/*onAddNewClick(){
		this.bugOperations
			.createNew(this.newBugName)
			.then(newBug => {
				this.newBugCreated.emit(newBug);
				this.newBugName = '';		
			});
		
	}*/

	onAddNewClick(){
		this.projectOperations
			.createNew(this.newProjectName)
			.subscribe(newProject => {
				this.router.navigate(['project']);	
			});
	}

}
