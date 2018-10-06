import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms"
import { Router, ActivatedRoute } from "@angular/router"
import { Gadget } from "../../interfaces/gadget.interface";


import { GadgetService } from "../../services/gadget.service";

@Component({
	selector: 'app-gadget',
	templateUrl: './gadget.component.html',
	providers: [GadgetService]
})
export class GadgetComponent implements OnInit {

	gadget:Gadget = {
		name: "",
		description: "",
		brand: "",
		price: null
	}

	isNewGadtet: boolean = false;
	id:string;

	constructor(
		private _gadgetService: GadgetService,
		private _router: Router,
		private _activatedRouter: ActivatedRoute
		) { }

	ngOnInit() {
		// this.chooseFunction();
	}

	save(){
		console.log(this.gadget);

		this._gadgetService.addGadget(this.gadget)
			.subscribe(data=>{
				this._router.navigate(['/gadgets']);
			},
			error =>{
				console.error(error);
			});
	}

	edit(){
		this._gadgetService.editGadget(this.gadget, this.id)
			.subscribe(data=>{
				this._router.navigate(['/gadgets']);
			},
			error =>{
				console.error(error);
			});
	}

	//This fucntion help to add or edit a gadget
	chooseFunction(){
		this._activatedRouter.params.subscribe(params=>{
			this.id = params['id']

			if(this.id == 'add'){
				this.save();
			}else{
				this.edit();
			}
		})
	}

}
