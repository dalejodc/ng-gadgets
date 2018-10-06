import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GadgetService } from '../../services/gadget.service';
import { Gadget } from '../../interfaces/gadget.interface';

@Component({
	selector: 'app-gadgets',
	templateUrl: './gadgets.component.html'
})
export class GadgetsComponent implements OnInit {

	gadgets: any[]=[];

	constructor(
		private _gadgetService:GadgetService,
		private _router:Router
		) { }

	ngOnInit() {
		this.getGadgets();
	}

	getGadgets(){
		this.gadgets = [];

		this._gadgetService.getGadgets().subscribe(
			data=>{
				// Building an array from Firebase 
				for(let key$ in data){
					let h = data[key$];
					h.key$ = key$; 
					this.gadgets.push(data[key$]);
				}
				console.log(this.gadgets);

		}, error=>{
			console.error(error);
		})
	}

	editGadget(key$:string){
		this._router.navigate(['/gadget', key$])
	}

	deleteGadget(key$:string){
		this._gadgetService.deleteGadget(key$).subscribe(
			success=>{
				console.log("Done!");
				this.getGadgets();
			}, 
			error=>{
				console.error(error);
			}
			);
	}

}
