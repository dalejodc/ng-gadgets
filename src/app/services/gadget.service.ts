import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Gadget } from '../interfaces/gadget.interface';
import { map } from 'rxjs/operators';


@Injectable({
	providedIn: 'root'
})

export class GadgetService {

	gadgestAPI ="https://angular-gadgets.firebaseio.com/gadgets.json";
	
	constructor( private http:HttpClient) { }

	addGadget(gadget:Gadget){

		let newGadget = JSON.stringify(gadget);
		
		let headers = new HttpHeaders({
			'Content-Type': 'application/json'
		});

		return this.http.post(this.gadgestAPI, newGadget, {headers})
			.pipe(map(res=>{
				console.log(res);
				return res;
				})
			);
	}

	editGadget(gadget:Gadget, key$:string){

		let newGadget = JSON.stringify(gadget);

		let url = `${this.gadgestAPI}/${key$}.json` 
		
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

	getGadgets(){

		let headers = new HttpHeaders({
			'Content-Type': 'application/json'
		});

		return this.http.get(this.gadgestAPI, {headers})
					.pipe(map(res=>{
						return res;
					}))
	}

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
