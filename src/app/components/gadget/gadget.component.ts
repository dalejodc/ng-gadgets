import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms"
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

  constructor() { }

  ngOnInit() {
  }

  save(){
  	console.log(this.gadget);
  }

}
