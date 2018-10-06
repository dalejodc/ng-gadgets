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
		this._activatedRouter.params.subscribe(
			params=>{
				this.id = params['id']
		});

		if(this.id != 'add'){
			this.getGadget();
		}
	}

	save(){

		if(this.id != 'add'){
			this.edit();
		}else{
			this._gadgetService.addGadget(this.gadget)
			.subscribe(
				data=>{
					this._router.navigate(['/gadgets']);
				},
				error =>{
					console.error(error);
			});
		}
		
	}

	edit(){
		console.log("Updating...", this.gadget, this.id);
		this._gadgetService.editGadget(this.gadget, this.id)
			.subscribe(data=>{
				this._router.navigate(['/gadgets']);
			},
			error =>{
				console.error(error);
			});
	}

	getGadget(){
		this._gadgetService.getGadget(this.id).subscribe(
			data=>{
				console.log(data);
				this.gadget = data;
			}, 
			error=>{
				console.log(error);
			});
	}

	//This fucntion help to add or edit a gadget
	chooseFunction(){
		this._activatedRouter.params.subscribe(params=>{
			this.id = params['id']

			if(this.id != 'add'){
				this.edit();
			}else{
				this.save();
			}
		})
	}

}
