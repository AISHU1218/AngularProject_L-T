import { Component, OnInit } from '@angular/core';
import { Project } from './models/Project';
import { ProjectOperationsService } from './services/projectOperations.services';


@Component({
	selector : 'app-project',
	templateUrl : 'project.component.html'
})


export class ProjectComponent implements OnInit{
	projects : Project[] = [];
	
	
	constructor(private projectOperations : ProjectOperationsService){
		
		
			
	}

	ngOnInit(){		
		this.loadProjects();
	}

	loadProjects(){
		console.log('loading projects');
		this.projectOperations
			.getAll()
			.subscribe(projects => this.projects = projects);
	}

	onNewProjectCreated(newproject){
		this.projects = [...this.projects, newproject];
	}
	
    onRemoveClick(projectToRemove: Project){
        this.projectOperations
            .remove(projectToRemove)
            .subscribe(() => this.projects = this.projects.filter(project => project !== projectToRemove))
    }
	
}