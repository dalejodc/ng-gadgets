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
}
