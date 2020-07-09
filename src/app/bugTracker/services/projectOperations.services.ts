import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectServerService } from "../services/projectServer.services";
import { Project } from '../models/Project';

@Injectable()
export class ProjectOperationsService{
	constructor(private projectServer : ProjectServerService){

	}
	getAll() : Observable<Project[]> {
		return this.projectServer.getAll();
	}
	createNew(projectName : string) : Observable<Project>{
		let newProject = {
			id : 0,
			name : projectName,
		};
		return this.projectServer.save(newProject);
	}
	
	remove(project : Project){
		return this.projectServer
			.remove(project)
		
	}
}