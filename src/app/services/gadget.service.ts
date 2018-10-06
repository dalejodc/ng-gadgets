import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Gadget } from '../interfaces/gadget.interface';
import { map } from 'rxjs/operators';


@Injectable({
	providedIn: 'root'
})

export class GadgetService {

	// gadgestAPI ="https://angular-gadgets.firebaseio.com/gadgets.json";
	
	constructor( private http:HttpClient) { }

	
	/*
	Function to add a new gadget
	POST
	*/
	addGadget(gadget:Gadget){

		let newGadget = JSON.stringify(gadget);
		
		let headers = new HttpHeaders({
			'Content-Type': 'application/json'
		});

		return this.http.post('https://angular-gadgets.firebaseio.com/gadgets.json', newGadget, {headers})
			.pipe(map(res=>{
				console.log(res);
				return res;
				})
			);
	}

	/*
	Function to edit a gadget
	PUT 
	*/
	editGadget(gadget:Gadget, key$:string){

		let newGadget = JSON.stringify(gadget);
		
		let headers = new HttpHeaders({
			'Content-Type': 'application/json'
		});

		return this.http.put(`https://angular-gadgets.firebaseio.com/gadgets/${key$}.json`, newGadget, {headers})
			.pipe(map(res=>{
				console.log(res);
				return res;
				})
			);
	}

	/*
	Function to get all gadgets
	GET
	*/
	getGadgets(){

		let headers = new HttpHeaders({
			'Content-Type': 'application/json'
		});

		return this.http.get('https://angular-gadgets.firebaseio.com/gadgets.json', {headers})
					.pipe(map(res=>{
						return res;
					}))
	}


	/*
	Function to get an especific gadgets by key$
	GET
	*/
	getGadget(key$:string){

		let url = `https://angular-gadgets.firebaseio.com/gadgets/${key$}.json` 
		console.log(url);
		
		let headers = new HttpHeaders({
			'Content-Type': 'application/json'
		});

		return this.http.get(url)
					.pipe(
						map(res=>{
							return res;
						})
					)
	}
}
