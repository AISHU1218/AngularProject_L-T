import { Component } from '@angular/core';
import { UserService } from './UserService';
import { Router } from '@angular/router';
@Component({
	selector : 'app-login',
	template : `
		<h1>Login to bug tracker app</h1>
		<input type="button" value="Login" (click)="onBtnLoginClickBugs()"/>
		
	
	`
})
export class LoginComponent{
	constructor(private router: Router, private userService : UserService){

	}
	onBtnLoginClickBugs(){
		this.userService.login();
		this.router.navigate(['/bugs', ]);
	}
	
}