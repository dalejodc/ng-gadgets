import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms"
import { Gadget } from "../../interfaces/gadget.interface";

@Component({
  selector: 'app-gadget',
  templateUrl: './gadget.component.html'
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

}
